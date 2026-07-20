function factorial(n: number): number {

   
    if (n < 0) {
        throw new Error();
    }


    let result = 1;

    // Calculate factorial using a loop
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}


console.log("Factorial of 0 ! = ", factorial(0));
console.log("Factorial of 1 ! =", factorial(1));

try {
    console.log("Factorial of -3! =", factorial(-3));
} catch (error) {
    console.log("The number is negative")
}