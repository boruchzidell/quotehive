let cron = require('node-cron');

let { getQuote } = require('./twilio');

console.log('before');

cron.schedule('* * * * *', () => {
  console.log('running task');
  getQuote();
  console.log('inside');
});

console.log('after');

in main
