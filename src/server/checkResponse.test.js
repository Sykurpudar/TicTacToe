const puppeteer = require("puppeteer");
const NotImplementedError = require("./NotImplemented");

describe("Google.com", () => {
  let browser, page;
  let url = "http://sykurflautur.herokuapp.com";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Server responds with 200 status code", async () => {
    const response = await page.goto(url);
    // Check that the server responds with a 200 status message
    expect(response._status).toBe(200);
  });

  test("Page title is 'Greeting page'", async () => {
    const response = await page.goto(url);
    // Check that the page title is "Google"
    const pageTitle = await page.title(url);
    expect(pageTitle).toBe("Greeting page");
  });

  
  test("Clicking top left square puts an X in it", async () => {
    await page.goto(url);
    let response = await page.goto(url);

    await page.click('.square');


    //const inputElement = await page.$('input[type=submit]');
    //await inputElement.click(); //3
    //await page.waitForNavigation({waitUntil: 'load'}); //4

    const pageTitle = await page.title();
   // expect(pageTitle).toBe("puppeteer api - Google Search");

   const inner_html = await ( await ( await page.$( '.square' ) ).getProperty( 'innerHTML' ) ).jsonValue();
  
   expect(inner_html).toBe("X");

  });
});
