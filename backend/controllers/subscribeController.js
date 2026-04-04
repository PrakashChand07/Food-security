const Subscribe = require('../models/Subscribe');
const base = require('./baseController');

module.exports = {
  create: base.create(Subscribe),
  getAll: base.getAll(Subscribe),
  getOne: base.getOne(Subscribe),
  update: base.update(Subscribe),
  delete: base.delete(Subscribe),
};