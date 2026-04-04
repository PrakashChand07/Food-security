const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/userController');
const { auth, requireRole } = require('../middleware/auth');

const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });
  next();
};

// Create user (only superadmin)
router.post('/create', auth, requireRole('superadmin'), [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars'),
  body('role').isIn(['admin','superadmin']).optional(),
], runValidation, controller.create);

// All users listing (protected)
router.get('/', auth, requireRole('superadmin'), controller.getAll);
router.get('/:id', auth, requireRole('superadmin'), controller.getOne);
router.patch('/:id', auth, requireRole('superadmin'), controller.update);
router.delete('/:id', auth, requireRole('superadmin'), controller.delete);

module.exports = router;
