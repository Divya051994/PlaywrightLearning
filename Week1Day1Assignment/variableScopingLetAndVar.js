const browserName = "chrome" //global scope so we are redeclaring it in the function scope and trying to access it outside the block scope which is not allowed so it will give error

function getBrowserName() {

    //hoisted var browserName ;

    if(browserName == "chrome") {

        //var browserName ; //undefined
        let brosweName ;  //chrome
    }

    console.log(browserName); 

}

getBrowserName();