/*
Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

*/

function squareSum(numbers){
    //[i] * [i] 
  let power = 0
  for(let i = 0 ; i<numbers.length; i++){
   
   power += numbers[i] * numbers[i]
  }
  return power
}

//the numbers multiply and find square roots 
//then those square roots are added to power
//then the numbers mulitply the next two arrays 
//then they add it to power again until there are no numbers in array left
//then we take that as the final returned power


//how to find square root : numbers[i] * numbers[i] 

//how to add a square root to the next set of numbers to square root : variable += numbers[i] * numbers[i] 

//how to get the full set of added and squared numbers back : 'return variable' outside of the for loop 