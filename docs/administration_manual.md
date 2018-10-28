# Administration Manual



# Ósvarað. Á admin/heroku/nýr notandi að build-a			TYPE A
# Eða á hann að geta sótt tilbúin gögn strax og byrjað?		TYPE B

Welcome!
If you're reading this, you wan't to set up and use Marshmallow TicTacToe.

TYPE A
This manual describes what you'll need to get the project to run on a fresh machine.
TYPE B
This manual describes what you'll need to build the project and run it on a fresh machine.


## Getting started
First we'll introduce all package prerequisites needed for deployment  
### Prerequisites

#### TYPE A
You'll need the following packages to run game. Installation instructions are in the next part.  
#### TYPE B
You'll need the following packages to build and run the game. Installation instructions are in the next part.  

#### TYPE A
Boilerplate build tools and script management
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) version 6.4.1+ (could work on older, but not tested)

Web request management
- [Express](https://expressjs.com/)

#### TYPE B
Boilerplate build tools and script management
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) version 6.4.1+ (could work on older, but not tested)

Web request management
- [Express](https://expressjs.com/)

Packaging tools
- [Webpack](https://webpack.js.org/) along with:
- - Webpack-CLI
- - Webpack-Dev-Server
- - HTML-Webpack-Plugin
- - Clean-Webpack-Plugin
- [CSS-loader][css-loader]


### Installing

Now you're ready to install everything needed. Great!

Build Tools
TYPE A
1. Clone the repo `git clone https://github.com/Sykurpudar/TicTacToe.git;`
2. Make sure you have [node.js][node] installed
3. Make sure you have [npm][npm] installed

TYPE B
1. Clone the repo `git clone https://github.com/Sykurpudar/TicTacToe.git;`
2. Make sure you have [node.js][node] installed
3. Make sure you have [npm][npm] installed
4. Move to the project directory `cd TicTacToe` and run `npm install`
   - NPM should detect the package.lock.json file and install all needed dependancies described above
5. Now you're ready to build. If errors appear in the build process, some dependancy may be missing

### Deploying and Running the program
TYPE A
To run the project on a production server
1. run `npm start`
2. open `localhost:8080` in a browser of your choice

TYPE B
To build and run the project on a production server
1. run `npm run build`
2. run `npm start`
3. open `localhost:8080` in a browser of your choice

### Maintaining the program
Missing

## Additional resources
- [12 example usages of Puppeteer][12examples]
- Behavior driven development with [Cucumber and Puppeteer][cucumber]

[12examples]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[cucumber]: https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/
[jest]: https://jestjs.io/
[npm]: https://www.npmjs.com/
[puppeteer]: https://github.com/GoogleChrome/puppeteer
