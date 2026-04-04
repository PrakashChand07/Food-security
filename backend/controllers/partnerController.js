const Partner = require('../models/Partner');
const base = require('./baseController');

module.exports = {
  create: base.create(Partner),
  getAll: base.getAll(Partner),
  getOne: base.getOne(Partner),
  update: base.update(Partner),
  delete: base.delete(Partner),
};
