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
  test.skip(({ isMobile }) => isMobile);

  test("clears the hash when navigating back to top", async ({ page }) => {
    await page.goto("/es");

    await page.getByRole("link", { name: "Contacto", exact: true }).click();

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

test("preserves the section hash when changing locale", async ({ page }) => {
  await page.goto("/es#projects");

  await expect(page).toHaveURL(/\/es#projects$/);

  await page.getByRole("button", { name: "EN", exact: true }).click();

  await expect(page).toHaveURL(/\/en#projects$/);

  await page.getByRole("button", { name: "ES", exact: true }).click();

  await expect(page).toHaveURL(/\/es#projects$/);
});
