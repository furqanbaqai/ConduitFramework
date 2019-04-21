const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const customerRoute = require('./routes/customer');
const accountRoute = require('./routes/account');
const fundsRoute = require('./routes/funds');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

// Business Routes
app.use('/api/customer/1', customerRoute);
app.use('/api/account/1', accountRoute);
app.use('/api/funds/1', fundsRoute);
// **************

// Generic Error Handling
app.use((error, req, res, next) => {
    // Will get here
    console.error(error);
    res.status(500).json({ code: '9001', message: error.message });
});

app.use('', (req,res,next) => {  
  res.status(404).json({ code: '9004', message: 'Invalid resource path' });
});
// ***********************
module.exports = app