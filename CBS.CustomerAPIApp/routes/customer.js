/**
 * Customer Routes Configuration File
 * 
 */
const express = require('express');
const CustomerControler = require('../controllers/customer-ctrl');
const router = express.Router();


/** Root URL: Will take customer ID in request */
router.get('/:id',CustomerControler.getCustomerByID);

module.exports = router;