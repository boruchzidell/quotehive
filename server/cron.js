let cron = require('node-cron');

let { getAndSendQuote } = require('./twilio');

cron.schedule('* * * * *', () => {
  getAndSendQuote();
});
