const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransactions,
  deleteTransactions,
} = require('../controllers/transaction');
const auth = require('../middleware/auth.js');

router.route('/').get(auth, getTransactions).post(auth, addTransactions);

router.route('/:id').delete(auth, deleteTransactions);
module.exports = router;
