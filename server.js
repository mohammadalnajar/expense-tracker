const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const app = express();
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
const transactionsRouter = require('./routes/transactions');

connectDB();
// routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/transactions', transactionsRouter);

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .yellow.bold
  )
);
