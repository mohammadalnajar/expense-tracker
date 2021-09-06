const dotenv = require('dotenv');
const path = require('path');
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

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactionsRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .yellow.bold
  )
);
