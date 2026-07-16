import {test,expect} from "@playwright/test"

   test.use({
    storageState: "auth.json"
}); 

test("Create Lead",async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("Demosalesmanager")
    await page.getByLabel('Password').fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click();
    await page.getByText('CRM/SFA').click();
    await page.getByRole("link",{name :"Leads"}).click();
    await page.locator('//a[@href="/crmsfa/control/createLeadForm"]').click();
    await page.locator('#createLeadForm_companyName').fill("HCL");
    await page.locator('input[id="createLeadForm_firstName"]').fill("divya");
    await page.locator('input[id="createLeadForm_lastName"]').fill("Thiruvengadam");
    await page.locator('//input[@name="personalTitle"]').fill("Miss");
    await page.locator('#createLeadForm_generalProfTitle').fill("Engr");
    await page.locator('#createLeadForm_annualRevenue').fill("123456");
    await page.locator('#createLeadForm_departmentName').fill("csc");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("987654321");
    await page.locator('//input[@type="submit"]').click();
    
     //verify company name first name and lastname
    await expect(page.locator('#viewLead_companyName_sp')).toContainText("HCL");
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText("divya");
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText("Thiruvengadam");

    //print title
    const title = await page.title();
    console.log("Page Title is"+title);
})

test("Edit Lead", async({page})=>{
await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("Demosalesmanager")
    await page.getByLabel('Password').fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click();
    await page.getByText('CRM/SFA').click();
    await page.getByRole("link",{name :"Leads"}).click();
    await page.getByRole("link",{name :"Find Leads"}).click();
    await page.getByRole("textbox",{name :"First Name"}).fill("divya");
    await page.getByRole("button",{name :"Find Leads"}).click();
    await page.locator('(//a[text()="divya"])[1]').click();
    await page.getByRole("link",{name :"Edit"}).click();
    await page.locator('//input[@id="updateLeadForm_companyName"]').clear();
    await page.locator('//input[@id="updateLeadForm_companyName"]').fill("testleaf");
    await page.getByRole("button",{name :"Update"}).click();

    //validate update
    await expect(page.locator('#viewLead_companyName_sp')).toContainText("testleaf");
})


test.only("create new account salesforce",async({page})=>{

    await page.goto("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/one/one.app")
    await page.waitForURL("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/lightning/page/home")
    const pageTitle = await page.title();
    console.log(pageTitle)
    await expect(page).toHaveTitle("Home | Salesforce") //playwright assertion for page not string
    await page.getByRole('button',{name:"App Launcher"}).click();
    //await page.getByRole('button', { name: 'View All Applications' }).click();
    await page.waitForLoadState("domcontentloaded");
    await page.getByPlaceholder('Search apps and items...').fill("Service");
    await expect(page.getByText("Service", { exact: true }).nth(0)).toBeVisible();
    //await page.locator('(//mark[text()="Service"])[1]').click();
    await page.getByText("Service",{exact:true})
    await page.locator('(//span[text()="Accounts"])[1]').click();
    await page.locator('//div[text()="New"]').click();
    await page.getByRole("textbox",{name : "Account Name"}).fill("divya");
    const saveButton = page.getByRole("button", { name: "Save",exact :true });
    await expect(saveButton).toBeEnabled();
    saveButton.click();
    await expect(page.getByText('Account "divya" was created.')).toBeVisible();



})