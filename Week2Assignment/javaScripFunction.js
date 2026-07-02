/**
 * -----------------------------------------
 * Author      : Divya
 * Program     : Functions - Named, Arrow, Anonymous and Callback
 * Description : Demonstrates named function, arrow function,
 *               anonymous function with setTimeout and callback function
 * Date        : 01-Jul-2026
 * -----------------------------------------
 */


function userProfile(name) {
  console.log("Hello "+name);
}

userProfile("Divya");

const double = (number) => {
  const result = number * 2;
  console.log(result);
};
double(10);


setTimeout(function () {
  console.log("This message is delayed by 2 seconds");
}, 2000);


function getUserData(callback) {
  console.log("This message is delayed by 3 seconds");
  setTimeout(function () {
    callback();
  }, 3000);
}

// Call getUserData and pass an anonymous function as callback
getUserData(function () {
  console.log("Call Back Function");
});