# Administration Manual

Welcome!
If you're reading this, you wan't to set up and use Sykurpudar's TicTacToe.
This manual describes what you'll need to do to run the program, either locally on your computer or via web server.

## Getting started
First we'll introduce all package prerequisites needed for deployment.

### Prerequisites
You'll need the following packages to run game. Installation instructions are in the next part.  

#### Boilerplate build tools and script management
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) version 6.4.1+ (could work on older, but not tested)

#### Web request management
- [Express](https://expressjs.com/)

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


### Running the program
To run the project on a production server
1. Run `npm start`
2. Open `localhost:8080` in a browser of your choice

#### Deployment and pipeline tools
The program can also be deployed to an external server, found at the [TicTacToe server][tictactoe].
1. Install [Heroku][heroku]
2. Set up a [CircleCI][circleci] account.
CircleCI will run end-to-end tests on a [staging server][stagingserver] using Heroku. If the tests pass, CircleCI will deploy to the [TicTacToe production server][tictactoe].
Code coverage is available at a [test result server][testresults] which will update regardless of whether the tests pass or not.

### Maintaining the program
Regular checks on whether the server is up and running are recommended.
To run local tests on the master branch's code, perform `git pull` followed by `npm test`. Pushing new changes will always trigger CircleCI to test the code, as long as CircleCI is enabled.

## Client
The client can access and play the game at the [TicTacToe server][tictactoe].

## Additional resources
- [12 example usages of Puppeteer][12examples]
- [About Heroku GitHub Deploys][herokudeploy]

For more information about the development, please refer to the [Development manual][devman].
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
[devman]: https://github.com/Sykurpudar/TicTacToe/blob/master/docs/development_manual.md
