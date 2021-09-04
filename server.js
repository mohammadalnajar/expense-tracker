const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

// routes
const transactionsRouter = require('./routes/transactions');

app.use('/api/v1/transactions', transactionsRouter);

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .yellow.bold
  )
);
