const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transaction_id: { type: Number, required: true, unique: true },
  transaction_method: Number,
  amount_payed: Number,
  currency: String,
  transaction_date: Date,
  project_id: Number,
  user_id: Number
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
