import {test} from "@playwright/test"

test("create Lead using Xpath", async({page})=>{

await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator('//input[@id="username"]').fill("DemoSalesManager");
    await page.locator('//input[@id="password"]').fill("crmsfa");
    await page.locator('//input[@class="decorativeSubmit"]').click();
    await page.locator('//a[contains(text() ,"CRM")]').click();
    await page.locator('//a[text()="Leads"]').click();
    await page.locator('//a[text()="Create Lead"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("HCL");
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("divya");
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Thiruvengadam");
    await page.locator('#createLeadForm_personalTitle').fill("Miss");
    await page.locator('#createLeadForm_generalProfTitle').fill("Eng");
    await page.locator('#createLeadForm_annualRevenue').fill("123456");
    await page.locator('#createLeadForm_departmentName').fill("CSC");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("999999")
    await page.locator('//input[@name="submitButton"]').click();
    const title = await page.title();
    console.log("Page Title is"+title);

})