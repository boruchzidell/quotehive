let express = require('express');
let {MessagingResponse} = require('twilio').twiml;

let app = express();

app.get('/sms', (req, res, next) => {
  let twiml = new MessagingResponse();

  twiml.message('The robots are comming');

  res.type('text/xml').send(twiml.toString());
});

let port = 3000;

app.listen(port, () => console.log(`App is listening on port: ${port}`));
