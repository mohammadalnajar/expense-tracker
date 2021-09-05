//  get transaction

const Transaction = require('../models/transaction');

// get /api/v1/transaction
exports.getTransactions = (req, res, next) => {
  res.send('Get transactions');
};

//  add transaction
// POST /api/v1/transaction
exports.addTransactions = async (req, res, next) => {
  console.log(req.body);
  const { text, amount } = req.body;
  //   res.send('add transactions');
  let transaction = new Transaction({
    text,
    amount,
  });
  try {
    transaction = await transaction.save();
    console.log(transaction);
    res.send('done');
  } catch (err) {
    console.log(err);
  }
};

//  delete transaction
// del /api/v1/transaction/:id
exports.deleteTransactions = (req, res, next) => {
  res.send('delete transactions');
};
