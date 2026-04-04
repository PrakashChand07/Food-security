const ExhibitSponsor = require('../models/ExhibitSponsor');
const base = require('./baseController');

module.exports = {
  create: base.create(ExhibitSponsor),
  getAll: base.getAll(ExhibitSponsor),
  getOne: base.getOne(ExhibitSponsor),
  update: base.update(ExhibitSponsor),
  delete: base.delete(ExhibitSponsor),
};
