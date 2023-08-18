const express = require("express");

const https = require("https");

const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    //console.log(req.body.longitude + " " + req.body.latitude);
    // const longitude = "10.99";
const latitude = req.body.latitude;
const longitude = req.body.longitude;
const appid = "adc4edc6d983c9829d54172740171a2b";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appid + "&units=" + unit;

https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn" + icon + "@2x.png";

        // console.log(temp);
        // console.log(weatherDescription);

        // res.send("<ul><li><h1>The temperature in London is " + temp + " degrees Celcius</h1></li><li><h1>The weather description in London is " + weatherDescription + " presently</h1></li><ul>");
        res.write("<h1>The temperature in London is " + temp + " degrees Celcius</h1>");
        res.write("<p>The weather is currently " + weatherDescription + "</p>");
        res.write("<img src=" + imageURL+ ">");
        res.send();
    })
})
});



// res.send("Server is up and running");

app.listen(3000, function(){
    console.log("Server started and running on port 3000...");
})