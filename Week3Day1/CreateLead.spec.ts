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

    //Leads
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.waitForTimeout(2000)
    await page.locator("#createLeadForm_companyName").fill("Titan")
    await page.locator("#createLeadForm_firstName").fill("Ram")
    await page.locator("#createLeadForm_lastName").fill("Prasadh")
    await page.locator("#createLeadForm_personalTitle").fill("Ms")
    await page.locator("#createLeadForm_generalProfTitle").fill("QA")
    await page.locator("#createLeadForm_annualRevenue").fill("10000")
    await page.locator("#createLeadForm_departmentName").fill("Testing")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("1080345678")
    await page.locator("//input[@class='smallSubmit']").click()
    await page.waitForTimeout(2000)

    //Create data

    console.log(await page.title())
    console.log("Lead created sucessfully")

    //Company name matching
    await page.locator("#viewLead_companyName_sp").click()
    const Companyname = await page.locator("#viewLead_companyName_sp").textContent()
    console.log(Companyname)
    expect(Companyname).toContain("Titan")
    console.log("Company name is matching")
    await page.waitForTimeout(2000)

    //First name matching
    const firstname = await page.locator("#viewLead_firstName_sp").textContent()
    console.log(firstname)
    expect(firstname).toContain("Ram")
    console.log("First name is matching")
    await page.waitForTimeout(2000)


    //Last name matching
    const Lastname = await page.locator("#viewLead_lastName_sp").textContent()
    console.log(Lastname)
    expect(Lastname).toContain("Prasadh")
    console.log("Lase name is matching")
    await page.waitForTimeout(2000)    
})