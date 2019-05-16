const log4js = require('log4js');
const package = require('./package.json');
const someVar = package.name;

log4js.configure({
    appenders: {[`${someVar}`]: { type: 'stdout', layout: { type: 'coloured' } } },
    categories: {default: { appenders: [`${someVar}`], level: process.env.LOG_LEVEL || 'debug' }}
});
var logger = log4js.getLogger([`${someVar}`]);


module.exports = logger;