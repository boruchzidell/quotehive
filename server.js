let express = require('express');

let {MessagingResponse} = require('twilio').twiml;

let app = express();

app.use(express.urlencoded({extended: true}));

app.post('/sms', (req, res, next) => {
  let smsResponse;

  switch (req.body.Body) {
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

  res.type('text/xml').send(twiml.toString());
});

let port = 3000;

app.listen(port, () => console.log(`App is listening on port: ${port}`));
