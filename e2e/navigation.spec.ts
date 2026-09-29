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
