#! /usr/bin/env node

require('dotenv').config();

const recipientNumber = process.env.TWILIO_TO_NUMBER;

const { pool } = require('./db');
const { createTwilioMessage } = require('./twilioClient');

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

async function getAndSendQuote() {
  try {
    let quote = await getQuote();
    let twilioConfirmation = await createTwilioMessage(quote, recipientNumber);
    console.log(twilioConfirmation.sid);
  } catch (err) {
    console.log(err.stack);
  }
}

module.exports = {
  getAndSendQuote,
};
