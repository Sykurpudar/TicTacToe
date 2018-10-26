# Development Manual

Welcome!
If you're reading this, you wan't to contribute to this Marshmallow TicTacToe.  
This manual describes what you'll need to get the project to build on a fresh machine so that you can start coding.  
## Getting started
First we'll introduce all package prerequisites needed for development and deployment  
### Prerequisites
You'll need the following packages to build. Installation instructions are in the next part.  

Boilerplate build tools and script management
- [Node.js][node]
- [NPM][npm] version 6.4.1+ (could work on older, but not tested)

Web request management
- [Express][express]

Packaging tools
- [Webpack][webpack] along with:
- - Webpack-CLI
- - Webpack-Dev-Server
- - HTML-Webpack-Plugin
- - Clean-Webpack-Plugin
- [CSS-loader][css-loader]
- Lodash NOT BEING USED

Test frameworks
- [Jest][jest]
- [Puppeteer][puppeteer]

Continuous Pipeline
- [GitHub][github]
- [CircleCI][circleci]
- [Heroku][heroku]


### Installing

Now you're ready to install everything needed. Great!

Build Tools

1. Clone the repo `git clone https://github.com/Sykurpudar/TicTacToe.git;`
2. Make sure you have [node.js][node] installed
3. Make sure you have [npm][npm] installed
4. Move to the project directory `cd TicTacToe` and run `npm install`
   - NPM should detect the package.lock.json file and install all needed dependancies described above
5. Now you're ready to build. If errors appear in the build process, some dependancy may be missing

Deployment and pipeline tools
1. Install [Heroku][heroku]
2. This stuff is only applicaple to us, with privileges


### Building

There's two ways to build our project

- Running a production-like server
- - run `npm start`

- Running a development server
- - run `npm dev-server`


### Running the tests
This repository uses the [Jest][jest] testing framework and the [Puppeteer][puppeteer] library for writing automated acceptance tests for services.

Running all tests for both frameworks can be done with `npm test`

### Writing tests
- Test files are located under the `src/logic/` folder.

## Additional resources
- [12 example usages of Puppeteer][12examples]
- Behavior driven development with [Cucumber and Puppeteer][cucumber]

For comments, inquiries or suggestions, contact hrefna17@ru.is

[12examples]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[cucumber]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[jest]: https://jestjs.io/
[npm]: https://www.npmjs.com/
[puppeteer]: https://github.com/GoogleChrome/puppeteer
[heroku]: https://www.heroku.com/
[github]: https://www.github.com/
[node]: https://www.nodejs.org/
[express]: https://expressjs.com/
[webpack]: https://webpack.js.org/
[css-loader]: https://github.com/webpack-contrib/css-loader 

