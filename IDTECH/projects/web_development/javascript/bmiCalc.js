/*
Function that calculate BMI
BMI = (weight(kg)/height**2(m2))
*/

function bmiCalculator(weight, height) {
  // return (weight/(height ** 2));
  return Math.round((weight/Math.pow(height, 2)));
}

var bmi = bmiCalculator(65, 1.8);

console.log("Your BMI = " + bmi + " kg/m2");