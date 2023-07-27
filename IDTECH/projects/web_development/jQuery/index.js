// $("h1").css("color", "red");
// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// $("h1").css("color", "green");
//console.log($("h1").css("font-family"));

// $("h1").addClass("big-title margin-50");

// $("button").html("<em>Hey</em>");

// $("img").attr("src");

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").attr("class");

// $("h1").click(function() {
//   $("h1").css("color", "purple");
// });

// for (var i = 0; i<(document.querySelectorAll).length; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(function() {
//   $("h1").css("color", "purple");
// });


// $(document).keypress(function(event) {
//   $("h1").html(event.key);
//  });

//  $(document).keypress(function(event) {
//   $("h1").text(event.key);
//  });

// $("h1").on("mouseover", function() {
//   $("h1").css("color", ("purple"));
//  });

// $("h1").before("<button>New</button>");

$("button").on("click", function() {
  $("h1").animate({margin: "50%"});
});