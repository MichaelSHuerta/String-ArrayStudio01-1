const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newString1 = str.slice(0,3)
let newString2 = str.substring(3) + newString1 ;
console.log(newString2)


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log("the previous string is ${str}.The new string is ${newString2}.");


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let answer = input.question("how many letters would you like to shift from LaunchCode?");
let number = Number(answer)
console.log(number);

if (number < 1|| number >= str.length) {
  console.log("ERROR! ERROR! only numbers between 1 and 4 + str.length")}




//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
