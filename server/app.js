require('dotenv').config({ path: '../.env' });

let express = require('express');
let app = express();

let { MessagingResponse } = require('twilio').twiml;

let { task: cronTask } = require('./cron');

let path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

app.use(express.urlencoded({ extended: true }));

app.post('/sms', (req, res, next) => {
  let incomingSms = req.body.Body;
  let smsResponse;

  switch (incomingSms) {
    case 'begin':
      cronTask.start();
      smsResponse = 'Cron started';
      break;
    case 'enough':
      cronTask.stop();
      smsResponse = 'Cron stopped';
      break;
    default:
      smsResponse = 'Not exist';
  }

  let twiml = new MessagingResponse();

  twiml.message(smsResponse);

  res.type('text/xml');
  res.send(twiml.toString());
});

// Uncomment
// cronTask.start();

let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Quotehive app listening on port: ${port}`));
