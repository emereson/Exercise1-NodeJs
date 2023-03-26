const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
  const user = await User.findAll({
    where: {},
  });
  res.status(200).json({
    status: 'success',
    message: `all users `,
    results: user.length,
    user,
  });
};

exports.findOneUsers = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id: id,
    },
  });
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `user whit id:${id}  not found`,
    });
  }
  res.status(201).json({
    status: 'success',
    message: 'the query has been done successfully',
    user,
  });
};

exports.createUsers = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  res.status(201).json({
    status: 'success',
    message: 'user creadt',
    user,
  });
};

exports.oupdateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = await User.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `Product whit id:${id}  not found`,
    });
  }
  await user.update({ name, email });

  res.status(201).json({
    status: 'success',
    message: `updated data`,
    user,
  });
};

exports.deleteUsers = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const user = await User.findOne({
    where: {
      id,
      status: true,
    },
  });

  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: `Product whit id:${id}  not found`,
    });
  }

  await user.update({ status: false });

  return res.status(201).json({
    status: 'success',
    message: `disabled user`,
    user,
  });
};
