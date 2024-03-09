function lifeInWeeks(currentAge) {
  const remYears = 90 - currentAge;
  var months = remYears * 12;
  var weeks = remYears * 52;
  var days = remYears * 365;

  console.log("You have " + days + " days " + weeks + " Weeks, and " + months + " months left.");
}

lifeInWeeks(33);

