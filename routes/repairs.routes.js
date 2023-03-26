const express = require('express');

const repairsController = require('../controllers/reapirs.controller');
const productMiddleware = require('../middlewares/repairs.middlewares');

const repairRoute = express.Router();

repairRoute
  .route('/')
  .get(repairsController.findAllRepairs)
  .post(productMiddleware.validProducts, repairsController.createRepairs);

repairRoute
  .route('/:id')
  .get(repairsController.findOneRepairs)
  .patch(repairsController.updateRepairs)
  .delete(repairsController.deleteRepairs);

module.exports = repairRoute;
