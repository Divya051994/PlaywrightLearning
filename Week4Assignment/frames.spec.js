import {test,expect} from "@playwright/test"

test("frames" ,async({page})=>{
    await page.goto(" https://leafground.com/frame.xhtml");
    //to get total number of frames inside the page
    const totalFrame = await page.frames();
    console.log(totalFrame.length);
    //to get only iframes inside the page 
    const iframe =await  page.locator("iframe");
    console.log(await iframe.count());
    //Handling iframe
    const frame = await page.frameLocator('iframe[src="default.xhtml"]');
    await frame.getByRole("button", { name: "Click Me" }).click();
    await expect(frame.getByRole("button")).toHaveText("Hurray! You Clicked Me.");
    //Handling Nested iframe
    const outerFrame = await page.frameLocator('iframe[src="page.xhtml"]');
    const innerFrame = await outerFrame.frameLocator('iframe[src="framebutton.xhtml"]');
    await innerFrame.getByRole("button", { name: "Click Me" }).click();
    await expect(innerFrame.getByRole("button")).toHaveText("Hurray! You Clicked Me.");

})