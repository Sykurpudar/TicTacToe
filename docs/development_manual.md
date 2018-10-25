# Development Manual
What is needed and how to get the project to build on a fresh machine, 
Source control client and access to source control Build environment, 
Other necessary dependencies for development.

// CHANGE THIS

## Getting started
### Prerequisites
- [NPM][npm] version 6.4.1+ (could work on older, but not tested)

// ADD EVERYTHING THAT NEEDS TO BE INSTALLED, FOR EXAMPLE WEBPACK, DEV-SERVER, ETC.

### Installing
After cloning the repo, run `npm install` in the project directory.

- `git clone https://github.com/Sykurpudar/TicTacToe.git; cd TicTacToe; npm install`

// ADD EVERYTHING THAT NEEDS TO BE INSTALLED, FOR EXAMPLE WEBPACK, DEV-SERVER, ETC.

// HEROKU, CIRCLECI, ETC?

// CHANGE EVERYTHING BELOW HERE!

### Running the tests
This repository uses the [Jest][jest] testing framework and the [Puppeteer][puppeteer] library for writing automated acceptance tests for services.

### Writing tests
- Test files are located under the `src/logic/` folder.

## Additional resources
- [12 example usages of Puppeteer][12examples]
- Behavior driven development with [Cucumber and Puppeteer][cucumber]

[12examples]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[cucumber]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[jest]: https://jestjs.io/
[npm]: https://www.npmjs.com/
[puppeteer]: https://github.com/GoogleChrome/puppeteer
