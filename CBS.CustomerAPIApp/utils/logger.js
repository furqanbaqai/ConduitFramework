/**
 * File Name: logger.js
 * Description: Log4js helper file for logging
 * References: https://github.com/log4js-node/log4js-node
 * 
 * Authur: (@furqanbaqai) Muhammad Furqan 
 * Email: furqanbaqai@openfintechlab.io
 * Created On: 16/05/2019
 * Last Changed On: 16/05/2019
 */

const log4js = require('log4js');
const package = require('../package.json');
const logeerName = package.name + '(' + package.version + ')';


log4js.configure({
    appenders: {[`${logeerName}`]: { type: 'stdout', layout: { type: 'coloured' } } },
    categories: {default: { appenders: [`${logeerName}`], level: process.env.LOG_LEVEL || 'debug' }}
});
var logger = log4js.getLogger([`${logeerName}`]);


module.exports = logger;