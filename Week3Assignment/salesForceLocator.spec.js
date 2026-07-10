import {test,expect} from "@playwright/test"

    test.use({
    storageState: "auth.json"
});

test("sales Force-Create Lead",async({page})=>
{
    await page.goto("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/lightning/page/home");
    /* await page.context().storageState({ path: "auth.json" }); */
    await page.locator('//button[contains(@class,"slds-show")]').click();
    await page.getByRole('button', { name: 'View All Applications' }).click(); 
    await page.locator('one-app-launcher-app-tile[data-name="Sales"]').click();
    await page.locator('//span[text()="Leads"]/parent::a').click();
    //await page.locator('//button[@name="New"]').click();
    await page.locator('//a[@title="New"]').click();
    await page.locator('//label[text()="Salutation"]/following::button[1]').click();
    await page.locator('//span[text()="Mrs."]').click();
    await page.locator('//input[@placeholder="Last Name"]').fill("divya");
    await page.locator('//input[@name="Company"]').fill("hcl");
    await page.locator('//button[contains(@name,"SaveEdit")]').click();
})

test("sales Force-Edit Lead",async({page})=>
{
    /* await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click(); */
    await page.goto("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/lightning/page/home");
     await page.locator('//button[contains(@class,"slds-show")]').click();
    await page.getByRole('button', { name: 'View All Applications' }).click(); 
    await page.locator('one-app-launcher-app-tile[data-name="Sales"]').click();
    await page.locator('//span[text()="Leads"]/parent::a').click();
    await page.locator('//button[@name="inlineEditButton"]').click();
    await page.locator('(//span[text()="divya"])[1]').click();
    await page.locator('//span[text()="Show more actions"]/parent::button').click();
    await page.locator('//span[text()="Edit"]').click();
    await page.locator('//input[@name="Company"]').fill("hcl1");
    await page.locator('//button[@name="SaveEdit"]').click();
    await page.waitForTimeout(3000);
    expect(await page.locator('//lightning-formatted-text[text()="hcl1"]')).toHaveText("hcl1")

})