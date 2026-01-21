const { test, expect } = require("@playwright/test");

test("UI Basics Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator("#username");
  const signIn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body a");
  //css
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await userName.fill("rahulshetty");
  await page.locator("#password").fill("learning");
  await signIn.click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");
  //type - fill
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  await signIn.click();
  console.log(await cardTitles.nth(1).textContent());
  const allTitles = await cardTitles.allTextContents();
  console.log(allTitles);
});

test.only("UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator(".blinkingText");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#password").fill("learning");
  const dropDown = await page.locator("select.form-control");
  await dropDown.selectOption("Student");
  await page.locator("[value ='user']").click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator("[value ='user']").isChecked());
  await expect(page.locator("[value ='user']")).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentLink).toHaveAttribute("class", "blinkingText");

  await page.pause();
});
