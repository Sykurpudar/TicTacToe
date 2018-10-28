const puppeteer = require("puppeteer");
const NotImplementedError = require("./NotImplemented");

describe("TicTacToe", () => {
  let browser, page;
  let url = "http://sykurflautur.herokuapp.com";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    //browser.close();
  });
  

  test("Server responds with 200 status code", async () => {
    const response = await page.goto(url);
    // Check that the server responds with a 200 status message
    expect(response._status).toBe(200);
  });

  test("Page title is 'Greeting page'", async () => {
    const response = await page.goto(url);
    const pageTitle = await page.title(url);
    expect(pageTitle).toBe("TicTacToe");
  });

  test("Clicking top left square puts an X in it", async () => {
    await page.goto(url);
    let response = await page.goto(url);
    await page.click('.top.right');

   const inner_html = await ( await ( await page.$( '.top.right' ) ).getProperty( 'innerHTML' ) ).jsonValue();
  
   expect(inner_html).toBe("X");

  }); 

  test("Clicking Play again clears the board", async () => {
    await page.goto(url);
    let response = await page.goto(url);

    await page.evaluate(() => {
      let squares = document.getElementsByClassName('square');
      for (let s of squares)
          s.click();
    });

    await page.click('#play-again');

    var topleft = await ( await ( await page.$( '.top.left' ) ).getProperty( 'innerHTML' ) ).jsonValue();
    var topmid = await ( await ( await page.$( '.top.midcol' ) ).getProperty( 'innerHTML' ) ).jsonValue();
    var topright = await ( await ( await page.$( '.top.right' ) ).getProperty( 'innerHTML' ) ).jsonValue();

    var midleft = await ( await ( await page.$( '.middle.left' ) ).getProperty( 'innerHTML' ) ).jsonValue();
    var midmid = await ( await ( await page.$( '.middle.midcol' ) ).getProperty( 'innerHTML' ) ).jsonValue();
    var midright = await ( await ( await page.$( '.middle.right' ) ).getProperty( 'innerHTML' ) ).jsonValue();

    var botleft = await ( await ( await page.$( '.bottom.left' ) ).getProperty( 'innerHTML' ) ).jsonValue();
    var botmid = await ( await ( await page.$( '.bottom.midcol' ) ).getProperty( 'innerHTML' ) ).jsonValue();
    var botright = await ( await ( await page.$( '.bottom.right' ) ).getProperty( 'innerHTML' ) ).jsonValue();

    inner_html = topleft + topmid + topright + midleft + midmid + midright + botleft + botmid + botright;
    expect(inner_html).toBe("");

  });




});
