const express = require('express');

const userController = require('../controllers/user.controller');
const userMiddlewares = require('../middlewares/users.middleware');

const userRoute = express.Router();

userRoute
  .route('/')
  .get(userController.findAllUsers)
  .post(userMiddlewares.validUsers, userController.createUsers);

userRoute
  .route('/:id')
  .get(userController.findOneUsers)
  .patch(userController.oupdateUsers)
  .delete(userController.deleteUsers);

module.exports = userRoute;
