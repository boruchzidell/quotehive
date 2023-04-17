let cron = require('node-cron');
let { getAndSendQuote } = require('./quotes');

cron.schedule('* * * * *', getAndSendQuote, { timezone: 'America/New_york' });
