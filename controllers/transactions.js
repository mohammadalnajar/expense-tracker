//  get transaction
// get /api/v1/transaction
exports.getTransactions = (req, res, next) => {
  res.send('Get transactions');
};

//  add transaction
// POST /api/v1/transaction
exports.addTransactions = (req, res, next) => {
  res.send('add transactions');
};

//  delete transaction
// del /api/v1/transaction/:id
exports.deleteTransactions = (req, res, next) => {
  res.send('delete transactions');
};
