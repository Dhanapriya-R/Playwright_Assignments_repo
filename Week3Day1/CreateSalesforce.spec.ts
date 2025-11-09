
import {expect, test} from "@playwright/test"

test('Create sales force account', async({page})=>
{
    await page.goto("https://login.salesforce.com/")
    //await page.goto("https://orgfarm-473981a802-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
    /* await page.getByLabel('Username').fill("priyar473639@agentforce.com")
    await page.getByLabel('Password').fill("Priya@velu1")
    await page.locator("#Login").click() */

    const url= await page.url()
    console.log(url)
    const title= await page.title()
    expect(title).toContain("Salesforce")
    console.log(title)
    //login
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    const title1= await page.title()
    console.log(title1)

    await page.waitForTimeout(5000)

    //click applauncher
    await page.locator("//span[text()='App Launcher']").click()
    await page.locator("//button[text()='View All']").click()
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.waitForTimeout(2000)
    await page.locator("(//p[@class='slds-truncate'])[1]").click()
    await page.locator("//span[text()='Accounts']").click()
    await page.waitForTimeout(3000)
    await page.getByRole('button', {name:'New'}).click()
    await page.locator("//input[@name='Name']").fill("Dhanapriya")
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(5000)
   // const toaster = await page.locator("//div[@class='forceVisualMessageQueue']").textContent()
   // expect(toaster).toContain(' created')
   await expect (page.locator("//div[@class='forceVisualMessageQueue']")).toContainText("Account \"Dhanapriya\" was created")
    console.log("Account created successfull")

})
