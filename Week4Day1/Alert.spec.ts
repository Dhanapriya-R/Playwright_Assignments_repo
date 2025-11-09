import test from '@playwright/test'
test('Alert Handling', async({page})=>
{ 
   
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm", {
    timeout: 30000, // Increase timeout to 30 seconds
    waitUntil: 'domcontentloaded' // Use a faster load trigger
  });
  
    await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()
    
     await page.on('dialog', async alert=>
    {
        const type=alert.type()
        console.log(type)
        console.log(alert.message())
        if(type==='confirm')
            await alert.accept()
        else if(type==='prompt')
            {
                await alert.accept("Added")
            }       
            else
            {
                await alert.dismiss()
            }
    }
    )
    await page.waitForTimeout(3000)
    const Message = await page.frameLocator("#iframeResult").locator("#demo").innerText()
    console.log("The Alert message is : "+Message)
})