import {expect, test} from '@playwright/test'
test("CreateLead", async ({page})=>
{
    await page.goto ("http://leaftaps.com/opentaps/control/main")
//Login details
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.waitForTimeout(2000)

    const title=await page.title()
    console.log(title)
    const Expectedtitle = "Leaftaps - TestLeaf Automation Platform"
    expect(title).toBe(Expectedtitle)
    console.log("Login Sucessful")
    await page.locator("//div[@class='crmsfa']").click()

//Find Lead
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Find Leads']").click()
    await page.waitForTimeout(2000)
    await page.locator("(//input[@name='firstName'])[3]").fill("Ram")
    await page.locator("(//input[@name='lastName'])[3]").fill("Prasadh")
    await page.locator("//button[text()='Find Leads']").click()
    await page.waitForTimeout(2000)
    await page.locator("(//a[@class='linktext'])[4]").click()
    await page.waitForTimeout(5000)

//Edit Lead
    await page.locator("//a[text()='Edit']").click()
    await page.waitForTimeout(2000)
    const cmpy = await page.locator("(//input[@name='companyName'])[2]")
    await cmpy.click()
    await page.waitForTimeout(2000)
    await cmpy.press('Control+A');
    await cmpy.press('Backspace');
    await cmpy.fill('Noise');
    const revenue= await page.locator("//input[@name='annualRevenue']")
    await revenue.click()
    await revenue.press('Control+A')
    await revenue.press('Backspace')
    await revenue.fill("20,000")
    await page.locator("#updateLeadForm_description").fill("Edited the Lead data")
    await page.locator("(//input[@name='submitButton'])[1]").click()
    await page.waitForTimeout(2000)

//assertion
    const editedcmpyname = await page.locator("//span[contains(text(), 'Noise')]").textContent()
    expect(editedcmpyname).toContain("Noise")
    console.log("Data edited sucessfully")
    await page.waitForTimeout(2000)




})