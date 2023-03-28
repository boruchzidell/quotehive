let express = require('express');
let app = express();
let { MessagingResponse } = require('twilio').twiml;
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));

app.post('/sms', (req, res, next) => {
  let incomingSms = req.body.Body;
  let smsResponse;

  switch (incomingSms) {
    case 'A':
      smsResponse = 'One';
      break;
    case 'B':
      smsResponse = 'Two';
      break;
    default:
      smsResponse = 'Not exist';
  }

  let twiml = new MessagingResponse();

  twiml.message(smsResponse);

  res.type('text/xml');
  res.send(twiml.toString());
});

let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`SMS Quotes app listening on port: ${port}`));
