// import puppeteer from "puppeteer";
import puppeteer from "puppeteer-extra";

import StealthPlugin from "puppeteer-extra-plugin-stealth";
import ADBlockPlugin from "puppeteer-extra-plugin-adblocker";
import AnonymizeUAPlugin from "puppeteer-extra-plugin-anonymize-ua";
import ResourceBlockPlugin from "puppeteer-extra-plugin-block-resources";

import { BLOG_URL } from "./constants";

puppeteer
  .use(StealthPlugin())
  .use(ADBlockPlugin())
  .use(AnonymizeUAPlugin())
  .use(ResourceBlockPlugin());

(async function main() {
  const browser = await puppeteer.launch({
    product: "chrome",
    headless: true,
    ignoreHTTPSErrors: true,
    slowMo: 1000,
    timeout: 5000,
    defaultViewport: {},
  });

  const page = await browser.newPage();

  await page.goto(BLOG_URL);
})();
