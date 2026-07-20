import {test,expect} from "@playwright/test"
import { LoginPage } from "./login";

    test.use({
    storageState: "auth.json"
});

test("Create New Lead in sales force ",async({page})=>
{

     /* await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("divyathiru0594.33ec0b43c0c2@agentforce.com");
    await page.locator("#password").fill("DivY@2805");
    await page.locator("#Login").click();

    // If Salesforce asks for OTP,
    // enter it manually and continue.

    // Wait until Lightning Home page loads
    await page.waitForURL("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/one/one.app", { timeout: 120000 });

    // Save authentication state
    await page.context().storageState({ path: "auth.json" }); */

        const obj = new LoginPage(page);

        await obj.loadurl("https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/one/one.app",
            "https://orgfarm-7a5cb36283-dev-ed.develop.lightning.force.com/lightning/page/home"

        );

        await obj.navigateSales("Sales");

        await obj.CreateLead("Divya","hcl");
        

})