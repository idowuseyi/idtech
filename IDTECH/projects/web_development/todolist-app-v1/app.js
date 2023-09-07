const express = require("express");
const bodyParser = require("body-parser");
//let ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

var items = ["Buy food", "Cook food", "Eat food"];

app.get("/", function(req, res){
    
    var today = new Date();
    // var currentDay = today.getDay();
    // const weekday = ['Sunday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
    // var currentDayName = weekday[currentDay];
    // var day = "";
    //console.log(currentDayName);
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options);

    // if (currentDay === 6 || currentDay === 0) {
    //     day = currentDayName;
    //     //res.write("<h1>Yea it's the weekend</h1>");
    // } else {
    //     // res.write("<p>It is not the weekend.</p>");
    //     // res.write("<h1>Boo! I have to work!</h1>");
    //     // res.send();
    //     day = currentDayName;
    //     //res.sendFile(__dirname + "/index.html");
    // }
    
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
});


app.listen(3000, function(){
    console.log("Server started and running on port 3000...")
})