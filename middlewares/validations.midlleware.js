const { body, validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createUserValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  validateFields,
];

exports.updateUserValidation = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  validateFields,
];

exports.loginUserValidation = [
  body('email')
    .notEmpty()
    .withMessage('email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  validateFields,
];
exports.createRepairs = [
  body('date').notEmpty().withMessage('date cannot be empty'),
  body('motorsNumber').notEmpty().withMessage('motorsNumber cannot be empty'),
  body('desciption').notEmpty().withMessage('desciption cannot be empty'),
  validateFields,
];
