


function named(num) {

    switch (true)
    {
        case (num > 0):
            return "positive";
            break;
        case (num < 0):
            return "negative";
            break;
        default:
            return "zero";
    }

}

console.log("The given number is: " + named (5));
console.log("The given number is: " + named(-1));
console.log("The given number is: " + named (0));