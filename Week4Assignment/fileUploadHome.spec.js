import {test,expect} from "@playwright/test"
import path from "path";

   test.use({
    storageState: "auth.json"
}); 

test.only("create new account salesforce",async({page})=>{

    await page.goto("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/one/one.app")
    await page.waitForURL("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/lightning/page/home")
    const pageTitle = await page.title();
    console.log(pageTitle)
    await expect(page).toHaveTitle("Home | Salesforce") //playwright assertion for page not string
    await page.getByRole('button',{name:"App Launcher"}).click();
    //await page.getByRole('button', { name: 'View All Applications' }).click();
    await page.waitForLoadState("domcontentloaded");
    await page.getByPlaceholder('Search apps and items...').fill("Accounts");
    await page.getByText("Accounts", { exact: true }).nth(0).click();
     await page.locator('(//span[text()="Accounts"])[1]').click();
    await page.locator('//div[text()="New"]').click();
    await page.getByRole("textbox",{name : "Account Name"}).fill("divya");
    await page.getByRole("combobox",{name : "Rating"}).click();
    await page.getByRole("option",{name : "Hot"}).click();
    await page.getByRole("button", { name: "Save",exact :true }).click();
    //await page.locator('(//span[text()="divya"])[1]').click();
    await page.locator('(//input[@type="file"])').setInputFiles(path.join(path.join(__dirname,"../../Inputs/image1.png")));
     await page.waitForTimeout(3000)
    

})