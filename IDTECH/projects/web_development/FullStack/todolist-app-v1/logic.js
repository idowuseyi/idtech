var today = new Date();
var currentDay = today.getDay();
weekday = ['Sunday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
currentDayName = weekday[currentDay];
//console.log(currentDayName);

var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
var today = new Date();

// console.log(today.toLocaleDateString("en-US", options));
// console.log(today.toLocaleTimeString("en-US", options));
// console.log(today.toLocaleString("en-US", options));

// var li = ['a', 'b', 'c'];
// for (let i = 0; i < li.length; i++) {
//     console.log(li[i]);
// }

// <% if (kindOfDay === 'Friday' || kindOfDay === 'Sunday') { %>
//     <h1 style="color: purple"><%= kindOfDay %> ToDo List</h1>
//   <% } else { %>
//     <h1 style="color: Blue"><%= kindOfDay %> ToDo List</h1>
//   <% } %>

let posts = [{title: "day 1", content: 'This is day 1'}, {title: "day 2", content: 'This is day 2'}, {title: "day 3", content: 'This is day 3'}]

// for (var post in posts){
//     console.log(post);
//     for (var key in posts[post]){
//         console.log(key + ": " + posts[post][key]);
//     }
// }

posts.forEach(function(obj, index) {
    console.log(index);
    for (var key in obj){
        console.log(key, obj[key]);
    }
});

for (let item in posts){
    obj = posts[item];
    console.log(Object.entries(obj)[0][1]);
  }