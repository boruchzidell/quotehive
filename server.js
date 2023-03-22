let express = require('express');
let app = express();
require('dotenv').config();

app.use(express.urlencoded({extended: true}));

let {MessagingResponse} = require('twilio').twiml;

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.messages
  .create({
    body: `testing 1 2 3`,
    from: '+15166143125',
    to: '+19173256872',
  })
  .then((message) => console.log(message.sid));

// app.post('/sms', (req, res, next) => {
//   let incomingSms = req.body.Body;
//   let smsResponse;

//   switch (incomingSms) {
//     case 'A':
//       smsResponse = 'One';
//       break;
//     case 'B':
//       smsResponse = 'Two';
//       break;
//     default:
//       smsResponse = 'Not exist';
//   }

//   let twiml = new MessagingResponse();

//   twiml.message(smsResponse);

//   res.type('text/xml');
//   res.send(twiml.toString());
// });

let port = process.env.PORT || 5000;

app.listen(port, () => console.log(`SMS Quotes app listening on port: ${port}`));
