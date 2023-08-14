const express = require("express");

const app = express();

// app.get("/", function(request, response) {
//     console.log(request);
// });
app.get("/", function(request, response) {
    response.send("<h1>Hello world</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: idowuseyi22@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I am Oluwaseyi Idowu, a backend software engineer certified by ALX Africa. Let me know what I can help you with this time.");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Food</li><li>Code</li><li>Helping people</li></ul>");
});


app.listen(3000, function () {
console.log("server started on port 3000");
});


