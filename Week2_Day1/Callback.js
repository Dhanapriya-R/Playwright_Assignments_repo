let browser='Chrome'
function a (callback)
{
    setTimeout(()=>
    {
        callback(browser)},2000
       
    )}

        

function b (version)
{
    console.log(version)
}

a(b)