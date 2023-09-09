const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//console.log(date());
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.get("/", function(req, res){

    let day = date.getDay();
    
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
  });

  app.post("/work", function(req, res){
    let items = req.body.newItem;
  
    items.push(item);
    console.log(req.body);
  
    app.redirect("/");
  });



app.listen(3000, function(){
    console.log("Server started and running on port 3000...")
})