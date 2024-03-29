let path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;

const twilioClient = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });

async function createTwilioMessage(text, toNumber) {
  if (!text) return;

  return await twilioClient.messages.create({
    body: text,
    from: process.env.TWILIO_FROM_NUMBER,
    to: process.env.TWILIO_TO_NUMBER || toNumber,
  });
}

module.exports = {
  createTwilioMessage,
};
