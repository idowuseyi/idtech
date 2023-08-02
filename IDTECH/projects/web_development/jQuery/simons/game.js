var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var numberOfbuttonClicked = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  //console.log(typeof(randomChosenColour));
  playSound(randomChosenColour);
  level += 1;
  $("h1").html("Level " + level);
  userClickedPattern = [];
};


var x = $(".btn").length;
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
      // switch(userChosenColour) {
      //   case "green":
      //     var col1 = new Audio('sounds/green.mp3');
      //     col1.play();
      //     break;
      //   case "red":
      //     var col2 = new Audio('sounds/red.mp3');
      //     col2.play();
      //     break;
      //   case "yellow":
      //     var col3 = new Audio('sounds/yellow.mp3');
      //     col3.play();
      //     break;
      //   case "blue":
      //     var col4 = new Audio('sounds/blue.mp3');
      //     col4.play();
      //     break;
      //   default:
      //     var wrong = new Audio('sounds/wrong.mp3');
      //     wrong.play();
      // }
      playSound(userChosenColour);
      checkAnswer(userClickedPattern - 1);
})
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

function playSound(name) {
  if (name === "green") {
    var col1 = new Audio('sounds/green.mp3');
    col1.play();
//    alert("we found green");
  } else if (name === "red") {
    var col2 = new Audio('sounds/red.mp3');
    col2.play();
//    alert("we found red");
  } else if (name === "yellow") {
    var col3 = new Audio('sounds/yellow.mp3');
    col3.play();
//    alert("we found yellow");
  } else if (name === "blue") {
    var col4 = new Audio('sounds/blue.mp3');
    col4.play();
//    alert("we found blue");
  } else {
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
  }
}

function animatePress(currentColour) {
  var x = $(".btn").length;
  for (var i = 0; i < x; i++) {
  $(".btn").click(function() {
    var butPressed = $(this);
    butPressed.addClass("pressed");
    setTimeout(function() {
      butPressed.removeClass("pressed");
    }, 100);
  }
  );}
}
animatePress();

$(document).keypress(function() {
  numberOfbuttonClicked += 1;
  if (numberOfbuttonClicked === 1) {
    $("h1").html("Level 0");
    nextSequence();
  } else {
    numberOfbuttonClicked = 0;
    level = 0;
    userClickedPattern = [];
    gamePattern = [];
    //callCheckAnswer();
  }
  // $("h1").html("Level " + level);
 });


// $("h1").on("keypress", function() {
//   $("h1").html("Level 1");
//  });


function checkAnswer(currentLevel) {
  console.log(gamePattern);
  console.log(userClickedPattern);
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    nextSequence();
  } else {
    console.log("wrong");
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
    var bd = $("body");
    bd.addClass("game-over");
    setTimeout(function() {
      bd.removeClass("game-over");
    }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");   
  }
}

function callCheckAnswer () {
  var uCP = userClickedPattern.length - 1;
  var gP = gamePattern.length - 1;
  if (gamePattern.length > 0) {
    if (userClickedPattern[uCP] === gamePattern[uCP]) {
      exit;
    } else if (uCP === gP) {
      checkAnswer(uCP);
    } else { checkAnswer(uCP); }
} else { checkAnswer(uCP); }
}