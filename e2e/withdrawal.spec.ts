import { test, expect, Page } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.describe("Banking Flow", () => {
  let page: Page;
  const depositAmount = "500";
  const withdrawalAmount = "355";
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("http://localhost:8080");
  });
  test("Can deposit", async () => {
    await page.getByRole("button", { name: "Deposit" }).click();
    await page
      .getByRole("spinbutton", { name: "Please enter the amount to" })
      .click();
    await page
      .getByRole("spinbutton", { name: "Please enter the amount to" })
      .fill(depositAmount);
    await expect(
      page.getByRole("spinbutton", { name: "Please enter the amount to" }),
    ).toHaveValue(depositAmount);
    await page.getByRole("button", { name: "Submit" }).click();
    expect(await page.getByRole("heading").textContent()).toContain(
      `Thank you. $${Number(depositAmount).toFixed(
        2,
      )} has been deposited to your account.\nIs there anything else you'd like to do?`,
    );
  });

  test("withdrawal", async () => {
    await page.getByRole("button", { name: "Withdrawal" }).click();
    await page
      .getByRole("spinbutton", { name: "Please enter the amount to" })
      .click();
    await page
      .getByRole("spinbutton", { name: "Please enter the amount to" })
      .fill(withdrawalAmount);
    await expect(
      page.getByRole("spinbutton", { name: "Please enter the amount to" }),
    ).toHaveValue(withdrawalAmount);
    await page.getByRole("button", { name: "Submit" }).click();
    expect(await page.getByRole("heading").textContent()).toContain(
      `Thank you. $${Number(withdrawalAmount).toFixed(
        2,
      )} has been withdrawn.\nIs there anything else you'd like to do?`,
    );
  });

  test("print statement", async () => {
    await page.getByRole("button", { name: "Print Statement" }).click();

    const firstRow = page.getByRole("row").nth(1);
    const secondRow = page.getByRole("row").nth(2);

    const firstRowAmount = await firstRow
      .getByRole("rowheader")
      .nth(1)
      .textContent();
    const secondRowAmount = await secondRow
      .getByRole("rowheader")
      .nth(1)
      .textContent();
    const firstRowBalance = await firstRow
      .getByRole("rowheader")
      .nth(2)
      .textContent();
    const secondRowBalance = await secondRow
      .getByRole("rowheader")
      .nth(2)
      .textContent();
    expect(firstRowAmount).toContain(depositAmount);
    expect(secondRowAmount).toContain(`-${withdrawalAmount}`);
    expect(firstRowBalance).toContain(depositAmount);
    expect(secondRowBalance).toContain(
      `${Number(depositAmount) - Number(withdrawalAmount)}`,
    );
  });

  test("back to home", async () => {
    await page.getByRole("button", { name: "Awesome GIC Bank" }).click();
    expect(await page.getByRole("heading").textContent()).toContain(
      `Welcome to Awesome GIC Bank! What would you like to do?`,
    );
  });

  test("quit", async () => {
    await page.getByRole("button", { name: "Quit" }).click();
    expect(await page.getByRole("heading").textContent()).toContain(
      `Thank you for banking with Awesome GIC Bank.\nHave a nice day!`,
    );
  });
});
