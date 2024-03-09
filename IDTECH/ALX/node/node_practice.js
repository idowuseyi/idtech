function f1 () {
  console.log('Hi');
  return true;
}

//f1();

var f2 = function () {
  console.log('Hi');
  return true;
}

//console.log(f2);
//f2();

// Example of both approach

var f = function () { console.log('Boo');}
  f.boo = 1;
 // f(); //outputs Boo
  //console.log(f.boo); //outputs 1


var convertNum = function (num) {
  return num + 10;
}

var processNum = function (num, fn) {
  return fn(num);
}

processNum(10, convertNum);

//Arrays

var arr = [];
var arr2 = [1, "Hi", {a:2}, function () {console.log('boo');}];
var arr3 = new Array();
var arr4 = Array(1, "Hi", {a:2}, function () {console.log('boo');} )


// Inheritance = 1. classical, 2. pseudoclassical, 3. functional

// uses camelCase while classes uses CapitalCamelCa..............se


var x = 10;
// Here x is 10
{
  let x = 2;
  console.log(x);// Here x is 2
}

console.log(x);

const numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue);

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

console.log(text, cars);

let language = "JavaScript";
let text2 = "";

for (let y of language) {
    text2 += y + " ";
}
console.log(language, text2);

//Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
  ]);

  console.log(fruits);

  var d;
  console.log(d);