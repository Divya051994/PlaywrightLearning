import {test,expect} from "@playwright/test"

test("Drop down",async({page})=>{

   await  page.goto("https://leafground.com/select.xhtml");
   await page.locator('//select[@class="ui-selectonemenu"]').click();
   const dropdown = await page.locator('//select[@class="ui-selectonemenu"]')
   await dropdown.selectOption({label :"Playwright"})
   const allDropDownValues = await page.locator('//select[@class="ui-selectonemenu"]/option').allInnerTexts();
   for(let i = 1; i<allDropDownValues.length ; i ++)
   {
      console.log(allDropDownValues[i].trim());
   }


    await page.locator('//label[text()="Select Country"]').click();
   
    await page.locator('//li[text()="India"]').click();

    await page.locator('//label[text()="Select City"]').click();

    await expect(page.locator('//li[text()="Chennai"]')).toBeVisible();

    await page.locator('//li[text()="Chennai"]').click();

    await page.locator('//button[contains(@class,"ui-autocomplete-dropdown")]').click();

    await page.locator('//li[text()="Appium"]').click();

    await page.locator('//li[text()="RestAssured"]').click();

    await page.locator('//li[text()="Playwright"]').click();

    

    await page.close();


})