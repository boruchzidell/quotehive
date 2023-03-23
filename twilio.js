#! /usr/bin/env node

require('dotenv').config();

const recipientNumber = '+19173256872';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;

const twilioClient = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });

const { pool } = require('./db');

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1; // includes max
}

async function getQuote() {
  let rowCount = `
    select count(*) rowCount from quotes
  `;

  let maxQuoteNumber = await pool
    .query(rowCount)
    .then((results) => +results.rows[0].rowcount) // coerced to integer
    .catch((err) => console.error('Error! : ', err.stack));

  if (!maxQuoteNumber) return;

  let quoteSql = `
    select quote from
      (select quote, row_number() over () rownum from quotes) t1
    where rownum = $1
  `;

  return await pool
    .query(quoteSql, [generateRandomNumber(maxQuoteNumber)])
    .then((results) => results.rows[0].quote)
    .catch((err) => console.log(err.stack));
}

async function sendText(text, toNumber) {
  if (!text) return;

  return await twilioClient.messages.create({
    body: text,
    from: process.env.TWILIO_NUMBER,
    to: recipientNumber,
  });
}

getQuote()
  .then((quote) => sendText(quote))
  .then((message) => console.log(message.sid))
  .catch((err) => console.log(err.stack));
