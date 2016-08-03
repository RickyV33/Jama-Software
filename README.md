![Alt text](/public/img/logo.png)

## About

JamaTrace is a project between Seven Source, a Portland State University computer science senior capstone team, and
[Jama Software](https://github.com/JamaSoftware). The team consists of seven members:
[Iman Bilal](https://github.com/ibilal), [Mike Hansen](https://github.com/HansenML),
[Ruben Piatnitsky](https://github.com/ruv-prog-so), [Chance Snow](https://github.com/chances),
[Kathleen Tran](https://github.com/kathtran), [Ricardo Valencia](https://github.com/RickyV33) (Team Lead), and
[Marc Week](https://github.com/Marc-Week).

JamaTrace allows customers of Jama Software to view the downstream relationships between their project items via a
graph that supports traceability. All data is retrieved from Jama's REST API.

## Usage

After cloning the repository, run the following command to install the application's dependencies.
```$ npm install```

If it doesn't already exist in your environment, create a new `.env` file in the project root directory, copying the
`.env.example` and modifying it as is necessary for the environment. *The `SESSION_SECRET` variable must be changed to
any unique String.*

To run all tests (as well as lint)
```$ npm test```

To run the linter
```$ npm run lint```

To run and debug
```npm run debug```

## Testing

### Unit testing using Mocha and Chai

To use Mocha, write your testing scripts in the test folder and then run the
specific script (if mocha is installed globally) using `mocha script.js` or
`mocha script`. (Or `./node_modules/.bin/mocha script.js` or
`./node_modules/.bin/mocha script` using your local installation of mocha)

Alternatively, lint and run all the tests using `npm test`.

## Copyright and license

Code and documentation copyright 2016 Iman Bilal, Michael Hansen, Ruben Piatnitsky, Chance Snow,
Kathleen Tran, Ricardo Valencia, Marcus Week. Code and documentation is released under the MIT license.
