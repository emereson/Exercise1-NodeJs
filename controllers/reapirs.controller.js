const Repair = require('../models/repairs.model');
const catchAsync = require('../utils/catchAsync');
const { db } = require('../database/config');

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
  const { date, motorsNumber, desciption } = req.body;
  const { sessionUser } = req;

  const repair = await Repair.create({
    date,
    motorsNumber,
    desciption,
    userId: sessionUser.id,
  });

  res.status(201).json({
    status: 'success',
    message: 'your request has been sent',
    repair,
  });
});

exports.updateRepairs = catchAsync(async (req, res) => {
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
