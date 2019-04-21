/**
 * Route for managing funds including funds transfer
 */

const express = require('express');
const router = express.Router();

const FTController = require('../controllers/funds-ctrl');

router.put('/withinbank', FTController.withinBankAccountTransfer);
router.put('/withinuae', FTController.withinUAEAccountTransfer);
router.put('/outsideuae', FTController.outsideUAETransfer);

module.exports = router;