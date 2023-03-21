<h1 align="center">SMS Quotes App</h1>

## Description

From time to time I come across a nice quote or thought that I'd like to remember. So I built this app to text me a daily quote picked at random.

The quotes are stored in a PostgreSQL database, and the algorithm ensures that all the quotes are shown at least once before any are repeated.

## Usage

Two ways to manage and populate the quotes store (CRUD):

- via the app's SMS number
- on the front-end

TODO: put SMS instructions here

## Links

- [Repo](https://github.com/boruchzidell/sms_quotes '<project-name> Repo')
- [Live site](<Homepage url> 'Live site')
- [Bugs](https://github.com/boruchzidell/sms_quotes/issues 'Issues Page')
- [API](<API Link> 'API')

## Screenshots

![Home Page](/screenshots/1.png 'Home Page')

![](/screenshots/2.png)

## Built With

- JavaScript
- Node.js
- Express.js
- PostgreSQL
- <code>node-cron</code> package
- Twilio messaging service

## Technical Notes

- architecture notes
- ERD diagram
- content negotiation depending on whether the request was via Twilio webhook or a plain HTTP request to the API.
-

## Future Updates

- [ ] Authentication and login
- [ ] Requirement to register number on app (to prevent spam abuse)
- [ ] &nbsp;

## Author

**Boruch Zidell**

- [Github Profile](https://github.com/boruchzidell 'Boruch Zidell Github')
- [LinkedIn](https://www.linkedin.com/in/boruchzidell 'Boruch Zidell LinkedIn')
