import {expect,test} from "@playwright/test"

test("Validate text Box",async({page})=>
{

    await page.goto("https://leafground.com/input.xhtml");
    
    await expect(page.locator('//input[contains(@class,"ui-state-disabled")]')).toBeDisabled();

     //this textbox is not actually disabled , so it will fail and using soft assert to continue execution

    await expect.soft(page.locator('(//input[contains(@class,"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all")])[1]')).toBeDisabled();

    await expect(page.locator('(//input[contains(@class,"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all")])[1]')).toBeEditable();

   const fillTextBox= page.locator('//textarea[contains(@class,"ui-inputfield ui-inputtextarea")]');

   await expect(fillTextBox).toBeEditable();

   await fillTextBox.fill("Divya")

   await page.waitForTimeout(100)
    

})