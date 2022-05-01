import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  jest.setTimeout(60000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/meet");
    await page.waitForSelector(".event");
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeNull();
  });

  afterAll(() => {
    browser.close();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;
  jest.setTimeout(60000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/meet");
    await page.waitForSelector(".event");
  });

  test("When user hasn’t searched for a city, show upcoming events from all cities", async () => {
    const eventCount = await page.$$eval(".event", (item) => item.length);
    expect(eventCount).toBe(2);
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin", { delay: 50 }); //type slower than user
    const cityCount = await page.$$eval(
      ".suggestions li",
      (item) => item.length
    );
    expect(cityCount).toBe(2);
  });

  test("User can select a city from the suggested list", async () => {
    await page.reload();
    await page.type(".city", "Berlin", { delay: 50 }); //type slower than user
    await page.click(".suggestions li");
    const eventCount = await page.$$eval(".event", (item) => item.length);
    expect(eventCount).toBe(1);
  });

  afterAll(() => {
    browser.close();
  });
});
