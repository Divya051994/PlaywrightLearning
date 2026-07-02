/**
 * -----------------------------------------
 * Author      : Divya
 * Program     : Check Browser Version using Callback
 * Description : Demonstrates global variable, callback function usage
 *               with setTimeout to simulate a server delay and
 *               pass browser value to the callback function
 * Date        : 02-Jul-2026
 * -----------------------------------------
 */

const browser = "Chrome version is xxx"
function checkBrowserVersion(callback)
{  
    console.log("Checking browser version ")
    setTimeout(function()
    {
    callback(browser);
    },2000)
    //Verification is printed at last beacuse due async , it will not wait till 2sec
    console.log("Verification Done")
}

checkBrowserVersion(function (browser){console.log("Browser Version is "+browser);})