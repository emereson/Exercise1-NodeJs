const Repair = require('../models/repairs.model');
const AppError = require('../utils/appError');

const catchAsync = require('../utils/catchAsync');

exports.validIfExistRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      status: 'pending',
      id,
    },
  });

  if (!repair) {
    return next(new AppError('repair not found', 404));
  }

  req.repair = repair;
  next();
});
