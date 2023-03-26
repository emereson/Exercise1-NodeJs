exports.validProducts = (req, res, next) => {
  const { date, userId } = req.body;
  if (!date) {
    return res.status(400).json({
      status: 'error',
      message: ' the date is required',
    });
  }
  if (!userId) {
    return res.status(400).json({
      status: 'error',
      message: ' the userld is required',
    });
  }
  next();
};
