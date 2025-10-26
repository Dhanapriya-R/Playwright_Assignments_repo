function fetchdatafromDB()
{
    return new Promise((resolve, reject)=>
    {
        console.log("Fetching the data from database")
        setTimeout(()=>
        {
            const data=true
            if(data)
            {
                console.log("Data fetched sucessfull")
            }
            else
                console.log("Data not fetched")

        },2000)
    }

)}

fetchdatafromDB().then(message=>console.log(message)).catch(error=>console.log(error))