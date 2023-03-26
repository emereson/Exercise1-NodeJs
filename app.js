const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const repairRoute = require('./routes/repairs.routes');
const userRoute = require('./routes/users.routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log('hello from the middleware!');
  next();
});

app.use('/api/v1/users', userRoute);
app.use('/api/v1/repairs', repairRoute);

module.exports = app;
