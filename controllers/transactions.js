const Transaction = require('../models/Transaction');
//  get transaction

// get /api/v1/transaction
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

//  add transaction
// POST /api/v1/transaction
exports.addTransactions = async (req, res, next) => {
  const { text, amount } = req.body;

  try {
    const transaction = await Transaction.create({
      text,
      amount,
    });
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }

    return res.status(500).json({
      susses: false,
      error: 'Server Error',
    });
  }
};

//  delete transaction
// del /api/v1/transaction/:id
exports.deleteTransactions = async (req, res, next) => {
  const { id } = req.params;
  try {
    const found = await Transaction.findByIdAndDelete(id);
    if (found !== null) {
      const transactions = await Transaction.find();
      return res.status(200).json({
        success: true,
        data: transactions,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: 'Not found',
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      susses: false,
      error: 'Server Error',
    });
  }
};
