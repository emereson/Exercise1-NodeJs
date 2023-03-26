const Repair = require('../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
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
};

exports.findOneRepairs = async (req, res) => {
  const { id } = req.params;

  const repair = await Repair.findOne({
    where: {
      id: id,
      status: 'pending',
    },
  });
  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `Product whit id:${id}  not found`,
    });
  }
  res.status(201).json({
    status: 'success',
    message: 'the query has been done successfully',
    repair,
  });
};

exports.createRepairs = async (req, res) => {
  const { date, userId } = req.body;

  const repair = await Repair.create({
    date,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'your request has been sent',
    repair,
  });
};

exports.updateRepairs = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `Product whit id:${id}  not found`,
    });
  }

  await repair.update({ status: 'completed' });

  res.status(201).json({
    status: 'success',
    message: `the status is changed to ${status}`,
    repair,
  });
};

exports.deleteRepairs = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return res.status(404).json({
      status: 'error',
      message: `Product whit id:${id}  not found`,
    });
  }

  await repair.update({ status: 'cancelled' });

  return res.status(201).json({
    status: 'success',
    message: `the status is changed to ${status}`,
    repair,
  });
};
