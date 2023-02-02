const accountSid = 'AC4af4b584d9448a96530003bd48a39e9b';
const authToken = 'b8ae412e67535b0673a6bd9b4c76bbc3';

const client = require('twilio')(accountSid, authToken);

let counter = 1;
client.messages
  .create({
    body: `Test 4`,
    from: '+15166143125',
    to: '+19173256872',
  })
  .then((message) => console.log(message.sid));
