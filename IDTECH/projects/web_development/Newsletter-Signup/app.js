const express = require("express");
//const request = require("request");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
})


