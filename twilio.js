#! /usr/bin/env node

const accountSid = 'AC4af4b584d9448a96530003bd48a39e9b';
const authToken = 'b8ae412e67535b0673a6bd9b4c76bbc3';
// const apiKey = 'SK987132a05105078ea3a697ac12095e42';
// const apiSecret = 'AjDaA9xfNBWoVn9roNphcERdmiMaoDz0';

require('dotenv').config();

const {pool} = require('./db');

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

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

pool
  .query('select * from quotes')
  .then((results) => results.rows[0].quote)
  .then((quote) => {
    return client.messages.create({
      body: quote,
      from: '+15166143125',
      to: '+19173256872',
    });
  })
  .catch((err) => console.log(err));
