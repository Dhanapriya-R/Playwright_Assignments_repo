import {test} from "@playwright/test"
test('Storage state for Salesforce account',async({page})=>{
await page.goto("https://login.salesforce.com")
await page.fill("#username","priyar473639@agentforce.com")
await page.fill("#password","Priya@velu1")
await page.click('#Login')
await page.waitForTimeout(3000)
//using storage state-store the information in the file with json format
await page.context().storageState({path:"D:/MSPlaywright/TestLeaf/Data/salesforceLogin.json"})
await page.waitForTimeout(3000)

})