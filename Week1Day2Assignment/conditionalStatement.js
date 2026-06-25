function launchBrowser(browsename)
{

    if(browsename === "Chrome")
    {
        console.log("Launching Chrome Browser");
    }
    else
    {
        console.log("Other browser is launched");
    }

}

function runTest(testType)
{

    switch(testType)
    {
        case "smoke":
            console.log("Running Smoke Test");
            break;
        case "regression":
            console.log("Running Regression Test");
            break;
        case "sanity":
            console.log("Running Sanity Test");
            break;
        default:
            console.log("executing smoke");
    }
}

launchBrowser("Chrome");
runTest("smoke");
runTest("regression");
runTest("sanity");
runTest("other");