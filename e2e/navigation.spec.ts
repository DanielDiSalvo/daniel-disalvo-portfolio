import { expect, test } from "playwright/test";

test.describe("Mobile navigation", () => {
  test.use({
    viewport: {
      width: 390,
      height: 844,
    },
  });

  test("opens the menu and navigates to projects", async ({ page }) => {
    await page.goto("/");

    const menuButton = page.getByRole("button", {
      name: "Open navigation menu",
    });

    await menuButton.click();

    await expect(
      page.getByRole("navigation", {
        name: "Mobile navigation",
      }),
    ).toBeVisible();

    await page.getByRole("link", { name: "Projects" }).click();

    await expect(page).toHaveURL(/#projects$/);

    await expect(
      page.getByRole("navigation", {
        name: "Mobile navigation",
      }),
    ).not.toBeVisible();
  });
});

test.describe("Back to top navigation", () => {
  test("clears the hash when navigating back to top", async ({ page }) => {
    await page.goto("/es#contact");

    await expect(page).toHaveURL(/\/es#contact$/);

    const backToTopButton = page.getByRole("button", {
      name: "Volver arriba",
    });

    await expect(backToTopButton).toBeVisible();

    await backToTopButton.click();

    await expect(page).toHaveURL(/\/es$/);

    await page.getByRole("button", { name: "EN", exact: true }).click();

    await expect(page).toHaveURL(/\/en$/);
  });
});

test.describe("Language switcher", () => {
  test("preserves the section hash when changing locale", async ({ page }) => {
    await page.goto("/es#projects");

    await expect(page).toHaveURL(/\/es#projects$/);

    await page.getByRole("button", { name: "EN", exact: true }).click();

    await expect(page).toHaveURL(/\/en#projects$/);

    await page.getByRole("button", { name: "ES", exact: true }).click();

    await expect(page).toHaveURL(/\/es#projects$/);
  });
});

test.describe("CV download", () => {
  test("downloads the correct CV for each locale", async ({ page }) => {
    await page.goto("/en");

    const englishDownloadPromise = page.waitForEvent("download");

    await page
      .getByRole("link", { name: "Download CV ↓", exact: true })
      .click();

    const englishDownload = await englishDownloadPromise;

    expect(englishDownload.suggestedFilename()).toBe(
      "Daniel_Di_Salvo_Senior_Frontend_Engineer_EN.pdf",
    );

    await page.goto("/es");

    const spanishDownloadPromise = page.waitForEvent("download");

    await page
      .getByRole("link", { name: "Descargar CV ↓", exact: true })
      .click();

    const spanishDownload = await spanishDownloadPromise;

    expect(spanishDownload.suggestedFilename()).toBe(
      "Daniel_Di_Salvo_Senior_Frontend_Engineer_ES.pdf",
    );
  });
});

test.describe("Home navigation", () => {
  test("clears the section hash when navigating home", async ({ page }) => {
    await page.goto("/es#projects");

    await expect(page).toHaveURL(/\/es#projects$/);

    await page.locator('header a[href="/es"]').click();

    await expect(page).toHaveURL(/\/es$/);
  });
});

test.describe("Portfolio smoke test", () => {
  test("renders the main portfolio sections", async ({ page }) => {
    await page.goto("/en");

    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#experience")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#stack")).toBeVisible();
    await expect(page.locator("#teaching")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
