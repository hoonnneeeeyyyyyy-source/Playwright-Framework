const { test, expect } = require("@playwright/test");

test.only("Assignment", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("hoonnneeeeyyyyyy@gmail.com");
  await page.locator("#userPassword").fill("abc@123456");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  //await page.locator(".card-body").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
});
