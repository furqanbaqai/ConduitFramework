const express = require('express');
const CustomerControler = require('../controllers/customer-ctrl');
const router = express.Router();

const AccountsController = require('../controllers/accounts-ctrl');
router.get('', AccountsController.getAccountByID);

module.exports = router;