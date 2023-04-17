const express = require('express');

const validations = require('../middlewares/validations.midlleware');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup', validations.createUserValidation, authController.signup);

router.post('/login', validations.loginUserValidation, authController.login);

module.exports = router;
