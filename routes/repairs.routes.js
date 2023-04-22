const express = require('express');

const repairsController = require('../controllers/reapirs.controller');
const repairsMiddleware = require('../middlewares/repairs.middleware');
const validationMiddleware = require('../middlewares/validations.midlleware');

const repairRoute = express.Router();

repairRoute
  .route('/')
  .get(repairsController.findAllRepairs)
  .post(validationMiddleware.createRepairs, repairsController.createRepairs);

repairRoute
  .route('/:id')
  .get(repairsMiddleware.validIfExistRepair, repairsController.findOneRepairs)
  .patch(repairsMiddleware.validIfExistRepair, repairsController.updateRepairs)
  .delete(
    repairsMiddleware.validIfExistRepair,
    repairsController.deleteRepairs
  );

module.exports = repairRoute;
