/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/


//This required the split method to seperate all the words together, then reverse each word in the string

//When I use join, the words are recreated in a reversed string 

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }