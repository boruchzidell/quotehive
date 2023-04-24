let cron = require('node-cron');
let { getAndSendQuote } = require('./quotes');

let minute = '*';
let hour = '*';
let monthDate = '*';
let month = '*';
let dayOfWeek = '*';
let cronString = `${minute} ${hour} ${monthDate} ${month} ${dayOfWeek}`;

let task = cron.schedule(cronString, getAndSendQuote, {
  timezone: 'America/New_york',
  scheduled: false,
});

module.exports = {
  task,
};
