// controllers/paymentController.js
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');

const getRazorpayInstance = () => new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

exports.createOrder = async (req, res, next) => {
  try {
    const razorpay = getRazorpayInstance();

    const {
      amount,
      qty = 1,
      planTitle,
      customer = {},
      displayCurrency = 'USD',
    } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }

    const options = {
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      payment_capture: 1,
    };

    const rOrder = await razorpay.orders.create(options);

    const order = await Order.create({
      planTitle,
      amount: options.amount,
      currency: options.currency,
      displayAmount: amount,           // what user saw (e.g. 1099)
      displayCurrency,                 // USD (for clarity)
      qty,
      razorpayOrderId: rOrder.id,
      status: 'created',
      customer,
      createdAt: new Date(),
    });

    return res.json({
      success: true,
      order: rOrder,
      localOrderId: order._id,
    });
  } catch (err) {
    next(err);
  }
};

exports.verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, localOrderId } = req.body;

    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    // Signature mismatch
    if (generatedSignature !== razorpay_signature) {
      if (localOrderId) {
        await Order.findByIdAndUpdate(localOrderId, {
          status: 'failed',
          failedAt: new Date(),
        });
      }

      return res
        .status(400)
        .json({ success: false, message: 'Invalid payment signature' });
    }

    await Order.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: 'paid',
        paidAt: new Date(),
      },
      { new: true }
    );

    return res.json({
      success: true,
      message: 'Payment verified successfully',
    });
  } catch (err) {
    next(err);
  }
};
