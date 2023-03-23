#! /usr/bin/env node

const accountSid = 'AC4af4b584d9448a96530003bd48a39e9b';
const authToken = 'b8ae412e67535b0673a6bd9b4c76bbc3';

const recipientNumber = '+19173256872';
// const apiKey = 'SK987132a05105078ea3a697ac12095e42';
// const apiSecret = 'AjDaA9xfNBWoVn9roNphcERdmiMaoDz0';

require('dotenv').config();

const {pool} = require('./db');

const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// pool.query('select * from quotes', [], (err, results) => {
//   let res = results.rows[0].quote;

//   client.messages
//     .create({
//       body: res,
//       from: '+15166143125',
//       to: '+19173256872',
//     })
//     .then((message) => console.log(message.sid));
// });
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

async function getQuote() {
  let getMaxSql = `
    select row_number() over () rownum
    from quotes q
    order by rownum desc limit 1`;

  let maxQuoteNumber = await pool
    .query(getMaxSql)
    .then((results) => results.rows[0].rownum)
    .catch((err) => console.log(err.stack));

  let quoteSql = `
    select quote from
      (select quote, row_number() over () rownum from quotes q ) t
    where rownum = $1`;

  return await pool.query(quoteSql, [generateRandomNumber(maxQuoteNumber)]);
}

getQuote();

async function sendText(text, toNumber) {
  return await twilioClient.messages.create({
    body: text,
    from: process.env.TWILIO_NUMBER,
    to: recipientNumber,
  });
}

getQuote()
  .then((results) => results.rows[0].quote)
  .then((quote) => sendText(quote))
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err.stack));
