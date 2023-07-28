var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  console.log(typeof(randomChosenColour));
  if (randomChosenColour === "green") {
    var col1 = new Audio('sounds/green.mp3');
    col1.play();
//    alert("we found green");
  } else if (randomChosenColour === "red") {
    var col2 = new Audio('sounds/red.mp3');
    col2.play();
//    alert("we found red");
  } else if (randomChosenColour === "yellow") {
    var col3 = new Audio('sounds/yellow.mp3');
    col3.play();
//    alert("we found yellow");
  } else if (randomChosenColour === "blue") {
    var col4 = new Audio('sounds/blue.mp3');
    col4.play();
//    alert("we found blue");
  } else {
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
  };

nextSequence();
//console.log(nextSequence());

// var x = $(".btn").length;
// for (var i = 0; i < x; i++) {
//  $(".btn").click(function() {
//   var buttonPressed = $(this).attr("id");
//   switch(buttonPressed) {
//     case "green":
//       var col1 = new Audio('sounds/green.mp3');
//       col1.play();
//       break;
//     case "red":
//       var col2 = new Audio('sounds/red.mp3');
//       col2.play();
//       break;
//     case "yellow":
//       var col3 = new Audio('sounds/yellow.mp3');
//       col3.play();
//       break;
//     case "blue":
//       var col4 = new Audio('sounds/blue.mp3');
//       col4.play();
//       break;
//     default:
//       var wrong = new Audio('sounds/wrong.mp3');
//       wrong.play();
//   }
//  });
// };