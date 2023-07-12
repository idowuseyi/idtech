// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

var output = [];
var count = 1;

function fizzBuzz() {
    //while (count <= 100) {
    for (var count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz")
    } else {
        output.push(count);
    }
    //count = count + 1;
}
    console.log(output);
    
}

fizzBuzz();

//fizzBuzz();