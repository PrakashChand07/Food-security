const Booking = require('../models/Booking');
const base = require('./baseController');

module.exports = {
  create: base.create(Booking),
  getAll: base.getAll(Booking),
  getOne: base.getOne(Booking),
  update: base.update(Booking),
  delete: base.delete(Booking),
};
