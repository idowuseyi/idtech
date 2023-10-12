const express = require("express");
//require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//const URI = process.env.connectionString;

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB');

const articleSchema = {
    title: String,
    content: String
  };
  
  const Article = mongoose.model("Article", articleSchema);

app.get("/articles", function(req, res){
    main().catch(err => console.log(err));
    async function main() {
    try {
        const foundArticles = await Article.find();
        console.log("All articles are found")
        res.send(foundArticles);
    } catch (err) {
        console.log(err);
    }
    }
})


app.listen(3000, function () {
console.log("server started and running on port 3000...");
});