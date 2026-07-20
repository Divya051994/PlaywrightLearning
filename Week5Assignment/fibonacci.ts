function fibonacci(num :number): number  {
    //Initialize of first and second number in the series 
    let firstNumber = 0 ;
    let secondNumber = 1 ;
    let nextNumber;

    if (num === 0) return 0;
    if (num === 1) return 1;

    console.log(firstNumber);
    console.log(secondNumber);

    //Loop through the give number num
    for(let i=2;i<num;i++)
    {
   
    //Getting the current number for the fibonacci series    
    nextNumber = firstNumber + secondNumber;

    console.log(nextNumber);
    //Update the values for the next iteration
    firstNumber = secondNumber ;
    secondNumber = nextNumber ;
    }
    return secondNumber;
    }
console.log("The number is"+fibonacci(11));
//console.log(fibonacci(15));