import {test , chromium , firefox} from "@playwright/test"

test("Load Red Bus in Edge", async({})=>
{
    const browserInstance = await chromium.launch({ channel:"msedge" ,headless: false});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto(" https://www.redbus.in");
    const Title =await page.title();
    const URL = await page.url();
    console.log("The page Title is "+Title)
    console.log("The page URL is "+URL)
    page.close();

});

test("Load Red Bus in Firefox", async({})=>
{
    const browserInstance = await firefox.launch({headless: false});
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto(" https://www.redbus.in");
    const Title =await page.title();
    const URL = await page.url();
    console.log("The page Title is "+Title)
    console.log("The page URL is "+URL)
    page.close();

});