// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked");
// }); // Annonymous function

// Adding an event listener to all the buttons

// document.querySelectorAll("button")[0].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[1].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click", function () {
//   alert("I got clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click", function () {
//   alert("I got clicked");
// });


// var x = document.querySelectorAll(".drum").length;
// for (let i = 0; i < x; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//   alert("I got clicked");
// })}; // Simplified code for adding an event listener to all the buttons.


// Now we will use drum sound instead of console.log

// var x = document.querySelectorAll(".drum").length;
// for (let i = 0; i < x; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     this.style.color = "#fff";    
// })};


// var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();

// COnstructor function
// function SchoolStudent (name, age, likes) {
//   this.name = name;
//   this.age = age;
//   this.likes = likes;
// }

// var student1 = new SchoolStudent("Ade", 17, ["food", "football", "story", "film"])

var x = document.querySelectorAll(".drum").length;
for (let i = 0; i < x; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
        break;
        case "a":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
        break;
        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
        break;
        case "d":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
        break;
        case "j":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
        break;
        case "k":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
        break;
        case "l":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
        break;
        default: console.log(buttonInnerHTML);
    }
})};

