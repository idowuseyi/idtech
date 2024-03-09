/**
 * Function that solves fibonacci sequence.
 * The implementation here starts from 0 , followed by 1 then the others.
 */

function fibonacciGenerator(n) {
  var output = [];
  if (n <= 0) { 
    return [];
  } else if (n === 1) {
    output.push(0);
    //return output;
  } else if (n === 2) {
    output.push(0);
    output.push(1);
    //return output;
  } else {
    output = [0,1];
    for (var i = 2; i < n; i++) {
      output[i] = output[(i-1)] + output[(i-2)]; 
    }
  }
  return output;

}

var output = fibonacciGenerator(5);
console.log(output);