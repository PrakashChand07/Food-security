const Speak = require('../models/Speak');
const base = require('./baseController');

module.exports = {
  create: base.create(Speak),
  getAll: base.getAll(Speak),
  getOne: base.getOne(Speak),
  update: base.update(Speak),
  delete: base.delete(Speak),
};
