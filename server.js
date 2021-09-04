const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env' });
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .yellow.bold
  )
);
