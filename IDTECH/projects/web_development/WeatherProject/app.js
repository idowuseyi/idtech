const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=aadc4edc6d983c9829d54172740171a2b&units=metric"

    https.get(url, function(response) {
        console.log(response.statusCode);
    })
    res.send("Server is up and running");
})

app.listen(3000, function() {
    console.log("Server started and running on port 3000...");
})