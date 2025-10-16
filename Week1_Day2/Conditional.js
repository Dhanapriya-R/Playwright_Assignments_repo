let browserName="Edge"
if(browserName=="Chrome")
{
    console.log("Launching Chrome browser")
}
else
    console.log("Launching default browser")

let testType="Regression"
switch(testType)
{
    case "Smoke":
        console.log("Running smoke testing")
        break;
        case "Sanity":
            console.log("Running Sanity testing")
            break;
            case "Regression":
                console.log("Running Regression testing")
                break;
                default:
                    console.log("Running default smoke testing")
                    break;
}