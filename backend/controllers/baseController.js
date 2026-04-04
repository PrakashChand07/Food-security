// Generic base controller with reusable CRUD handlers
const { sendFormEmail } = require('../utils/email');

// simple regexp escaper
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const create = (Model) => async (req, res, next) => {
  try {
    // Prevent duplicate submissions per form type by email.
    // Find all schema paths that look like email fields (ends with 'email', case-insensitive)
    const schemaPaths = Object.keys(Model.schema.paths || {});
    const emailFields = schemaPaths.filter(p => /email$/i.test(p));
    for (const field of emailFields) {
      const value = req.body && req.body[field];
      if (!value) continue;
      // case-insensitive exact match
      const q = {};
      q[field] = { $regex: `^${escapeRegExp(String(value).trim())}$`, $options: 'i' };
      const exists = await Model.exists(q);
      if (exists) {
        return res.status(400).json({ success: false, message: `An entry with this ${field} has already been submitted for this form.` });
      }
    }

    const doc = await Model.create(req.body);
    const obj = doc.toObject ? doc.toObject() : doc;
    obj.id = obj._id;
    res.status(201).json({ success: true, data: obj });

    // send form submission email to the submitter (non-blocking)
    try {
      sendFormEmail(Model.modelName, obj);
    } catch (err) {
      // ensure any email failures do not affect response
      console.error('Error triggering sendFormEmail', err);
    }
  } catch (err) {
    next(err);
  }
};

const getAll = (Model) => async (req, res, next) => {
  try {
    const { page = 1, limit = 50, sort = '-createdAt' } = req.query;
    const pageNum = Math.max(1, Number(page));
    const lim = Math.max(1, Number(limit) || 50);
    const skip = (pageNum - 1) * lim;

    const docs = await Model.find({}).sort(sort).skip(skip).limit(lim);
    const total = await Model.countDocuments();
    const pages = Math.max(1, Math.ceil(total / lim));

    const data = docs.map(d => {
      const o = d.toObject ? d.toObject() : d;
      o.id = o._id;
      return o;
    });

    res.json({
      success: true,
      data,
      pagination: {
        total,
        page: pageNum,
        pages,
        limit: lim,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getOne = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Model.findById(id);
    if (!doc) return res.status(404).json({ success: false, message: 'Not found' });
    const obj = doc.toObject ? doc.toObject() : doc;
    obj.id = obj._id;
    res.json({ success: true, data: obj });
  } catch (err) {
    next(err);
  }
};

const update = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Model.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Not found' });
    const obj = updated.toObject ? updated.toObject() : updated;
    obj.id = obj._id;
    res.json({ success: true, data: obj });
  } catch (err) {
    next(err);
  }
};

const del = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const removed = await Model.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ success: false, message: 'Not found' });
    const obj = removed.toObject ? removed.toObject() : removed;
    obj.id = obj._id;
    res.json({ success: true, data: obj });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  update,
  delete: del,
};
