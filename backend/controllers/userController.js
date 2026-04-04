const User = require('../models/User');
const base = require('./baseController');
const bcrypt = require('bcryptjs');

// Only superadmin should call create — enforce in route/middleware, but also hash password here
const create = async (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) return res.status(400).json({ success: false, message: 'Password required' });
    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;
    return base.create(User)(req, res, next);
  } catch (err) {
    next(err);
  }
};

// When updating password, hash it
const update = async (req, res, next) => {
  try {
    if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 10);
    return base.update(User)(req, res, next);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll: base.getAll(User),
  getOne: base.getOne(User),
  update,
  delete: base.delete(User),
};
