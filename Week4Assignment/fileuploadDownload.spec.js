import {test} from "@playwright/test";
import path from "path"

test("File upload",async({page})=>
{
        await page.goto("https://the-internet.herokuapp.com/upload");
    
        const fileupload= page.waitForEvent("filechooser");
    
        await page.locator("#drag-drop-upload").click();
    
        const file = await fileupload;
    
        file.setFiles(path.join(__dirname,"../../Inputs/image1.png"));
    
        await page.waitForTimeout(3000);
   
})

test("File download",async({page})=>
{
        await page.goto("https://the-internet.herokuapp.com/download");
        const download =  page.waitForEvent("download") 

        await page.locator('//a[text()="18.PNG"]').click();

        const file = await download;
        await file.saveAs(path.join(__dirname,"../../Inputs/18.PNG"));
        await page.waitForTimeout(3000)

})

