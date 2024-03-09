var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
//const newNumbers = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
//const newNumbers = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

////Find - find the first item that matches from an array.
// const newNumber = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex((num) => num > 10);

// Arrow function
// People also refer to this as the fat arrow. What it does is a shorter way of writing javascript function

//Basic function
// function square(x) {
//   return x * x;
// }

//If a function is taking a function it is good to use anonymous function
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });

//other than arnonymous function which takes away the function name, arrow function takes it a step further, it lets us actually delete the function keyword and we replace that with and equal sign and an greater than sign.
// The only thing that denotes that this is a function is the so called fat arrow. Note to be careful with the arrow to write it correctly. If we have just one parameter then we can remove the parenthesis around the parameter. In the same way if you only have a single line statement where you're only returning a single expression then you can delete the return keyword and the curly braces.
// The disadvantages here is that it might not be easily understandable for juniors in your team.
// const newNumbers = numbers.map((x) => x * x);

// console.log(newNumber);
