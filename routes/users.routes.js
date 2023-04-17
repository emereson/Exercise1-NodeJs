const express = require('express');

//controllers
const userController = require('../controllers/user.controller');

//middlewares
const userMiddleware = require('../middlewares/users.middleware');
const validationMiddleware = require('../middlewares/validations.midlleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.get('/', userController.findAllUser);

router
  .route('/:id')
  .get(userMiddleware.validIfExistUser, userController.findOneUser)
  .patch(
    userMiddleware.validIfExistUser,
    authMiddleware.protectAccountOwner,
    validationMiddleware.updateUserValidation,
    userController.updateUser
  )
  .delete(
    userMiddleware.validIfExistUser,
    authMiddleware.protectAccountOwner,
    userController.deleteUser
  );

module.exports = router;
