const Pitch = require('../models/Pitch');
const base = require('./baseController');

module.exports = {
  create: base.create(Pitch),
  getAll: base.getAll(Pitch),
  getOne: base.getOne(Pitch),
  update: base.update(Pitch),
  delete: base.delete(Pitch),
};
