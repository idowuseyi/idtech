function getMilk(money, costPerBottle) {
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk");

  return calcChange(money, costPerBottle); // remainder of this division.
}

function calcBottles(startingMoney, costPerBottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle) {
  var change = startingMoney % costPerBottle;
  return change;
}

console.log("Hello master, here is your " + getMilk(5, 1) + "$ change");