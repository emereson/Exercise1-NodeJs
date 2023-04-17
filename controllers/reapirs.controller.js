const Repair = require('../models/repairs.model');
const catchAsync = require('../utils/catchAsync');

exports.findAllRepairs = catchAsync(async (req, res) => {
  const repair = await Repair.findAll({
    where: {
      status: 'pending',
    },
  });
  res.status(200).json({
    status: 'success',
    message: `motorcycles pending repair`,
    results: repair.length,
    repair,
  });
});

exports.findOneRepairs = catchAsync(async (req, res) => {
  const { repair } = req;

  return res.status(201).json({
    status: 'success',
    repair,
  });
});

exports.createRepairs = catchAsync(async (req, res) => {
  const { date, userId } = req.body;

  await Repair.create({
    date,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'your request has been sent',
    repair,
  });
});

exports.updateRepairs = catchAsync(async (req, res) => {
  const { status } = req.body;
  const { repair } = req;

  await repair.update({ status: 'completed' });

  res.status(200).json({
    status: 'success',
    message: `the status is changed to completed `,
    repair,
  });
});

exports.deleteRepairs = catchAsync(async (req, res) => {
  const { repair } = req;

  await repair.update({ status: 'cancelled' });

  return res.status(200).json({
    status: 'success',
    message: `the status is changed to cancelled`,
    repair,
  });
});
