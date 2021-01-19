import { Cluster } from "puppeteer-cluster";

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url);
    const screen = await page.screenshot();
  });

  cluster.queue("http://www.google.com/");
  cluster.queue("http://www.wikipedia.org/");

  await cluster.idle();
  await cluster.close();
})();
