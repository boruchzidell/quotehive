require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;

const twilioClient = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });

async function createTwilioMessage(text, toNumber) {
  if (!text) return;

  return await twilioClient.messages.create({
    body: text,
    from: process.env.TWILIO_FROM_NUMBER,
    to: toNumber,
  });
}

module.exports = {
  createTwilioMessage,
};
