const Nominate = require('../models/Nominate');
const base = require('./baseController');

module.exports = {
  create: base.create(Nominate),
  getAll: base.getAll(Nominate),
  getOne: base.getOne(Nominate),
  update: base.update(Nominate),
  delete: base.delete(Nominate),
};
