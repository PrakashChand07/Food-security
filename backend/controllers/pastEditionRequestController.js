const PastEditionRequest = require('../models/PastEditionRequest');
const base = require('./baseController');

module.exports = {
  create: base.create(PastEditionRequest),
  getAll: base.getAll(PastEditionRequest),
  getOne: base.getOne(PastEditionRequest),
  update: base.update(PastEditionRequest),
  delete: base.delete(PastEditionRequest),
};
