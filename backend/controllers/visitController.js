const Visit = require('../models/Visit');
const base = require('./baseController');

module.exports = {
  create: base.create(Visit),
  getAll: base.getAll(Visit),
  getOne: base.getOne(Visit),
  update: base.update(Visit),
  delete: base.delete(Visit),
};
