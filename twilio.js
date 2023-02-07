#! /usr/bin/env node

// const accountSid = 'AC4af4b584d9448a96530003bd48a39e9b';
// const apiKey = 'SK987132a05105078ea3a697ac12095e42';
// const apiSecret = 'AjDaA9xfNBWoVn9roNphcERdmiMaoDz0';
// const authToken = 'b8ae412e67535b0673a6bd9b4c76bbc3';

// const client = require('twilio')(accountSid, authToken);
require('dotenv').config();

// console.log(process.env.)

const client = require('twilio')();

client.messages
  .create({
    body: `test`,
    from: '+15166143125',
    to: '+19173256872',
  })
  .then((message) => console.log(message.sid));

// client
//   .messages('SM1f3e4c9f4e1431e5b5266af5a53399a3')
//   .fetch()
//   .then((message) => console.log(message.status));

// curl -X POST "https://api.twilio.com/2010-04-01/Accounts/AC4af4b584d9448a96530003bd48a39e9b/Messages.json" \
// --data-urlencode "Body=Hi from curl" \
// --data-urlencode "From=+15166143125" \
// --data-urlencode "To=+19173256872" \
// -u AC4af4b584d9448a96530003bd48a39e9b:b8ae412e67535b0673a6bd9b4c76bbc3
