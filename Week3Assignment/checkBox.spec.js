import {test,expect} from "@playwright/test"

test("checkbox",async({page})=>{

   await page.goto("https://leafground.com/checkbox.xhtml");
   await page.locator('//span[text()="Basic"]').click();
   await page.locator('//span[text()="Ajax"]').click();
   await expect(page.locator('//span[text()="Checked"]')).toContainText("Checked");
   await page.locator('//label[text()="Java"]').click();
   await page.locator('//div[@id="j_idt87:ajaxTriState"]/div[contains(@class,"ui-chkbox-box")]').click();
   await expect(page.locator('//span[text()="State has been changed."]/following::p')).toContainText("State = 1")
   await page.locator('//div[@class="ui-toggleswitch-slider"]').click();
   const validateToggle = page.locator('//span[text()="Checked"]')
   expect(validateToggle).toHaveText("Checked");
   const buttonDisbaled = await page.locator('//input[@aria-label="Disabled"]')
   expect(buttonDisbaled).toBeDisabled();
   await page.locator('//ul[@data-label="Cities"]').click();
   const selectParis = await page.locator('//li[@data-item-value="Paris"]//div[contains(@class,"ui-state-default")]');
   await selectParis.click();
   await page.locator('//li[@data-item-value="London"]//div[contains(@class,"ui-state-default")]').click();
   await page.waitForTimeout(100);
   await page.close();
})