// var numbers = [3, 56, 2, 48, 5]

// Map - create a new array by doing something with each item in an array
// map takes a function as an argument. the function that will pass in will determine what is done to each item.
// map returns a new array by itself
// const newNumbers = numbers.map(function (x) {
//     return x ** 2;
// });

// var newNumbers = [];

// numbers.forEach(function (x) {
//     newNumbers.push(x ** 2);
// });

// console.log(newNumbers);


//Filter - Create a new array by keeping the items that return true
    // filter fxn takes a function as an argument, it loops through the array and for each element in the array returns the items which meets the criteria in the fxn.
    // returns a new array of items that meets the condition in the function.
// const newNumbers = numbers.filter(function (num) {
//     return num > 10;
// });

// var newNumbers = [];
// numbers.forEach(function (num) {
//     if (num > 10) {
//         newNumbers.push(num)
//     }
// });
// console.log(newNumbers);



//Reduce - Accumulate a vaue by doing something to each item in an array

// const newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     console.log("accumulator = " + accumulator + " || currentNumber = " + currentNumber)
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//     newNumber += currentNumber
// })


// (The first 3 function above are introduced way before es6 while the last 2 comes later)

var numbers = [3, 56, 2, 48, 5]
//Find - find the first item that matches from an array
// It doesn't loop through the entire array but stops as soon as it found the first match
// const newNumber = numbers.find(function (num) {
//     return num > 10;
// });
// console.log(newNumber);

//FindIndex - Find the index of the first item that matches

const newNumber = numbers.findIndex(function (num) {
    return num > 10;
});
console.log(newNumber);

// You can always checkup anyone anytime for use and no need to memorize anyone