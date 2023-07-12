

function whosPaying(names) {
  var payerIndex = (Math.floor(Math.random() * names.length));
  //console.log(names[payerIndex] + " is going to buy lunch today!");
  return names[payerIndex] + " is going to buy lunch today!";
}

var list = ["Angela", "Ben", "Jenny", "Micheal", "Chloe"];
console.log(whosPaying(list));