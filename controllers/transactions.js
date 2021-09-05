//  get transaction

const Transaction = require('../models/transaction');

// get /api/v1/transaction
exports.getTransactions = async (req, res, next) => {
  try {
    const result = await Transaction.find();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

//  add transaction
// POST /api/v1/transaction
exports.addTransactions = async (req, res, next) => {
  const { text, amount } = req.body;
  //   res.send('add transactions');
  let transaction = new Transaction({
    text,
    amount,
  });
  try {
    transaction = await transaction.save();
    res.json(transaction);
  } catch (err) {
    console.log(err);
  }
};

//  delete transaction
// del /api/v1/transaction/:id
exports.deleteTransactions = async (req, res, next) => {
  const { id } = req.params;
  try {
    const found = await Transaction.findByIdAndDelete(id);
    if (found !== null) {
      res.json(await Transaction.find());
    } else {
      res.json('not found');
    }
  } catch (err) {
    console.log(err);
  }
};
