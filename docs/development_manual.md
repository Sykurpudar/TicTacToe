# Development Manual

Welcome!
If you're reading this, you want to contribute to this TicTacToe project by Sykurpudar.  
This manual describes what you'll need to do in order to get the project to build on a fresh machine so that you can start coding.  

## Getting started
First we'll introduce all package prerequisites needed for development and deployment.

### Prerequisites
You'll need the following packages to build. Installation instructions are in the next part.  

#### Boilerplate build tools and script management
- [Node.js][node]
- [NPM][npm] version 6.4.1+ (could work on older, but not tested)

#### Web request management
- [Express][express]

#### Packaging tools
- [Webpack][webpack] along with:
- - Webpack-CLI
- - Webpack-Dev-Server
- - HTML-Webpack-Plugin
- - Clean-Webpack-Plugin
- [CSS-loader][css-loader]

#### Test frameworks
- [Jest][jest]
- [Puppeteer][puppeteer]

#### Continuous Pipeline
- [GitHub][github]
- [CircleCI][circleci]
- [Heroku][heroku]


### Installing

Now you're ready to install everything needed. Great!

#### Build Tools

1. Clone the repo `git clone https://github.com/Sykurpudar/TicTacToe.git;`
2. Make sure you have [node.js][node] installed
3. Make sure you have [npm][npm] installed
4. Move to the project directory `cd TicTacToe` and run `npm install`
   - NPM should detect the package.lock.json file and install all needed dependencies described above
5. Now you're ready to build. If errors appear in the build process, some dependency may be missing.

#### Deployment and pipeline tools
1. Install [Heroku][heroku]
- This step is only applicable to those with privileges. Please contact the owner of the Heroku app if you don't have access.
2. Set up a [CircleCI][circleci] account.


### Building

There are two ways to build the project:

- Running a production-like server
1. run `npm run build`
2. run `npm start`
3. open `localhost:8080` in a browser of your choice

- Running a development server
1. run `npm dev-server`


### Running the tests
This repository uses the [Jest][jest] testing framework and the [Puppeteer][puppeteer] library for writing automated acceptance tests for services.

Running all tests for both frameworks can be done with `npm test`
This automatically creates a fresh code coverage test report, saved in `public/testResults/lcov-report/`
It is visible via the url `localhost:8080/test` if the server is running.

### Branching
When making changes to the code, a development branch must be created for that functionality.
To switch to a development branch, use the command `git checkout -b "name_of_dev_branch`
To switch back to the master branch, use the command `git checkout master`
To delete a branch, use the command `git branch -d name_of_dev_branch`

### Writing tests
- Test files for game logic are located under the `src/logic/` folder.
- Test files for Puppeteer are located under the `src/server/` folder.

Code pushed to GitHub will be inspected by [CircleCI][circleci] using the written tests.

### Deploying
CircleCI will run end-to-end tests on a [staging server][stagingserver] using Heroku. If the tests pass, CircleCI will deploy to the [TicTacToe production server][tictactoe].
Code coverage is available at a [test result server][testresults] which will update regardless of whether the tests pass or not.

## Team protocol
All changes to the code must be pushed to a development branch.
When ready to merge with the master branch, a pull request must be opened and another member of the team reviews it and either merges it or closes the request if the commits are inadequate.
A pull request may only be merged to master branch if all CircleCI tests pass.

## Additional resources
- [12 example usages of Puppeteer][12examples]
- [About Heroku GitHub Deploys][herokudeploy]

For comments, inquiries or suggestions, contact thorduratl17@ru.is


[jest]: https://jestjs.io/
[npm]: https://www.npmjs.com/
[puppeteer]: https://github.com/GoogleChrome/puppeteer
[circleci]: https://circleci.com/
[heroku]: https://www.heroku.com/
[github]: https://www.github.com/
[node]: https://www.nodejs.org/
[express]: https://expressjs.com/
[webpack]: https://webpack.js.org/
[css-loader]: https://github.com/webpack-contrib/css-loader 
[stagingserver]: https://sykur-staging.herokuapp.com/
[tictactoe]: http://sykur-production.herokuapp.com/
[testresults]: http://sykur-testresults.herokuapp.com
[12examples]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[herokudeploy]: https://devcenter.heroku.com/articles/github-integration
