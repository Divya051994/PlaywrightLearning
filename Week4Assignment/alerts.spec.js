import {test,expect} from "@playwright/test"

test("Alerts" ,async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    const iframe = await page.frameLocator('#iframeResult');

     page.on("dialog", async (dialog) => {
        console.log(dialog.message());
        console.log(dialog.type());

        await dialog.accept();
    });
    

    //1.not handling dialog so by default plawright will cancel it 
    /* await iframe.getByRole("button",{name : "Try it"}).click();
    await expect(iframe.getByText("You pressed Cancel!")).toHaveText("You pressed Cancel!"); */

    //2.Handling dialog by using page.on listener
    await iframe.getByRole("button",{name : "Try it"}).click();
    await expect(iframe.getByText("You pressed OK!")).toHaveText("You pressed OK!");

})