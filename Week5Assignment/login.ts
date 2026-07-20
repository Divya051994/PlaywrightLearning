
import {Page,expect} from "@playwright/test" //Here Page is a TypeScript type.

export class LoginPage 
{
    page:Page;

    constructor(page : Page)
    {
        this.page = page ;

    }

    async loadurl(baseurl :string, loadurl :string)
    {
                await this.page.goto(baseurl)
                await this.page.waitForURL(loadurl)
                const pageTitle = await this.page.title();
                console.log(pageTitle)
                await expect(this.page).toHaveTitle("Home | Salesforce")
    }

    async navigateSales(tabName:string)
    {
        await this.page.getByRole('button',{name:"App Launcher"}).click();
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.getByPlaceholder('Search apps and items...').fill(tabName);
        await expect(this.page.getByText("Sales", { exact: true }).nth(2)).toBeVisible();
        await this.page.getByText("Sales", { exact: true }).nth(2).click();
    }

    async CreateLead(name : string , company : string)
    {

        await this.page.locator('//span[text()="Leads"]/parent::a').click();
        await this.page.locator('//a[@title="New"]').click();
        await this.page.locator('//label[text()="Salutation"]/following::button[1]').click();
        await this.page.locator('//span[text()="Mrs."]').click();
        await this.page.locator('//input[@placeholder="Last Name"]').fill(name);
        await this.page.locator('//input[@name="Company"]').fill(company);
        await this.page.locator('//button[contains(@name,"SaveEdit")]').click();

    }

}