const Contact = require('../models/Contact');
const base = require('./baseController');

module.exports = {
  create: base.create(Contact),
  getAll: base.getAll(Contact),
  getOne: base.getOne(Contact),
  update: base.update(Contact),
  delete: base.delete(Contact),
};
