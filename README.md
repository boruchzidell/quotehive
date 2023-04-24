<h1 align="center">QuoteHive</h1>

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
- [Live site](<Homepage url> 'Live site coming soon')
- [Bugs](https://github.com/boruchzidell/sms_quotes/issues 'Issues Page')

## Screenshots

![Home Page](/screenshots/1.png 'Home Page coming soon')

![](/screenshots/2.png)

## Built With

- JavaScript
- Node.js
- Express.js
- PostgreSQL
- <code>node-cron</code> package
- Twilio messaging service

## Technical Notes and Decisions

- architecture notes
- ERD diagram
- content negotiation depending on whether the request was via Twilio webhook or a plain HTTP request to the API.

Two ways to pick a random quote:

1. Using JS. This would result in querying the database twice, once to get the max number of records in the quotes table (for the upper bound of randomness), and using that to query for the actual quote. This is the route I went with, as it keeps the business logic contained in the code.

2. Develop a `Postgres user-defined function` to generate the random number, and use that to retrieve the quote. Even though this seems to be the more efficient way (there's only one query), it means mixing business logic into the database layer, which I wanted to avoid.

## Future Updates

- [ ] Authentication and login
- [ ] Requirement to register number on app (to prevent spam abuse)
- [ ] &nbsp;

## Author

**Boruch Zidell**

- [Github Profile](https://github.com/boruchzidell 'Boruch Zidell Github')
- [LinkedIn](https://www.linkedin.com/in/boruchzidell 'Boruch Zidell LinkedIn')
