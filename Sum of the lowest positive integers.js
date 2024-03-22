/* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

//This problem requires me to find a way to order the numbers properly and then add two numbers together 

//The first thing I need to do is put the numbers in order of highest to lowest 

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let addednumbers = numbers.sort((a,b) => a-b);
    
    return addednumbers[0] + numbers[1]; 
  }
  