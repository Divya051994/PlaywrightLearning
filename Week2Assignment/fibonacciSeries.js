/**
 * -----------------------------------------
 * Author      : Divya
 * Program     : Fibonacci Series
 * Description : Prints the Fibonacci series using a for loop
 * Date        : 28-Jun-2026
 * -----------------------------------------
 */

/**
 * Prints the Fibonacci series for the given number of terms.
 *
 * @param {number}  num ,The number of series to print
 * @author Divya
 */

function fibonacciSeries(num) {
    //Initialize of first and second number in the series 
    let firstNumber = 0 ;
    let secondNumber = 1 ;
    let nextNumber;
    //Loop through the give number num
    for(let i=0;i<num;i++)
    {
    // Display the current Fibonacci number
    console.log(firstNumber)
    //Getting the current number for the fibonacci series    
    nextNumber = firstNumber + secondNumber;
    //Update the values for the next iteration
    firstNumber = secondNumber ;
    secondNumber = nextNumber ;
    }
    }
fibonacciSeries(10);