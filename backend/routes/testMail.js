const express = require('express');
const router = express.Router();
const { Resend } = require('resend');

router.get('/test-mail', async (req, res) => {
  try {
    // 🔍 HARD DEBUG LOGS
    console.log('================ RESEND TEST =================');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log(
      'RESEND_API_KEY:',
      process.env.RESEND_API_KEY
        ? `SET (${process.env.RESEND_API_KEY.slice(0, 8)}...)`
        : '❌ NOT SET'
    );

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'RESEND_API_KEY not found in environment',
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailPayload = {
      from: 'Food Security Team <onboarding@resend.dev>',
      to: 'gsotnguys@gmail.com',
      subject: '🔥 RESEND LOCAL / LIVE TEST',
      html: `
        <h2>Resend Test Successful ✅</h2>
        <p>If you received this email, Resend is working.</p>
        <p><b>Environment:</b> ${process.env.NODE_ENV || 'unknown'}</p>
        <p><b>Time:</b> ${new Date().toLocaleString()}</p>
      `,
    };

    console.log('📤 Sending email payload:', emailPayload);

    const result = await resend.emails.send(emailPayload);

    console.log('✅ RESEND RESPONSE:', result);
    console.log('================================================');

    res.json({
      success: true,
      message: 'Test mail sent via Resend',
      resendResponse: result,
    });
  } catch (err) {
    console.error('❌ RESEND TEST FAILED');
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
      name: err.name,
    });
  }
});

module.exports = router;
