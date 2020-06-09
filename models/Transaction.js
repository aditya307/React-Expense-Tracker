const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "PLease add a number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Transactions", TransactionSchema);
