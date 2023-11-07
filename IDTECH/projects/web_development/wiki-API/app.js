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

/////////////////// Requests targetting All Articles //////////////////////////////

app.route("/articles")

.get(function(req, res){
    main().catch(err => console.log(err));
    async function main() {
        const foundArticles = await Article.find();
    if(foundArticles) {
        console.log("All articles are found");
        res.send(foundArticles);
    } else {
        res.send(err);
    }
    }
})

.post(function(req, res){
    main().catch(err => console.log(err));
    async function main() {
    console.log();
    console.log();

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    try{
        await newArticle.save();
        res.send("Successfully added a new article.");
    } catch (err){
        res.send(err);
    }
}
})

.delete(async function(req, res){
    try{
        await Article.deleteMany({});
        res.send("Successfully deleted all articles.");
    } catch (err){
        res.send(err); 
    }
});


/////////////////////////////// Requests targetting A Specific Article //////////////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){
    main().catch(err => console.log(err));

  async function main() {
//   const customListName = _.capitalize(req.params.customListName);
  const foundArticle = await Article.findOne({ title: req.params.articleTitle });

  if (foundArticle){
    console.log("Article found");
    res.send(foundArticle);
  } else {
    res.send("No article matching that title was found.");
  }
}
})

.put(function(req, res){
    main().catch(err => console.log(err));

  async function main() {
    const repArticle = await Article.replaceOne({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content});
    if (repArticle.matchedCount && repArticle.modifiedCount > 0) {
            res.send("Successfully updated article.");
        } else {
            res.send("Article not found else not updated. Consider using the right title.");
        }
  }
})

.patch(function(req, res){
    main().catch(err => console.log(err));

  async function main() {
    const upArticle = await Article.updateOne({title: req.params.articleTitle}, {$set: req.body});
    if (upArticle.matchedCount && upArticle.modifiedCount > 0) {
            res.send("Successfully updated article.");
        } else {
            res.send("Article not found else not updated. Consider using the right title.");
        }
  }
})

.delete(async function(req, res){
    const del = await Article.deleteOne({ title:req.params.articleTitle });
    if (del.deletedCount > 0) {
        res.send("Successfully deleted the article.");
    } else {
        res.send("Article not found else not deleted. Consider deleting the article using the right title.");
    }
});

// app.get("/articles", function(req, res){
//     main().catch(err => console.log(err));
//     async function main() {
//         const foundArticles = await Article.find();
//     if(foundArticles) {
//         console.log("All articles are found");
//         res.send(foundArticles);
//     } else {
//         res.send(err);
//     }
//     }
// });

// app.post("/articles", function(req, res){
//     main().catch(err => console.log(err));
//     async function main() {
//     console.log();
//     console.log();

//     const newArticle = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });

//     try{
//         await newArticle.save();
//         res.send("Successfully added a new article.");
//     } catch (err){
//         res.send(err);
//     }
// }
// });

// app.delete("/articles", async function(req, res){
//     try{
//         await Article.deleteMany({});
//         res.send("Successfully deleted all articles.");
//     } catch (err){
//         res.send(err); 
//     }

//     // main().catch(err => console.log(err));
//     // async function main() {
//     //     const del = await Article.deleteMany({});
//     //     if (del){
//     //         res.send("successfully deleted all article.");
//     //     }
//     // }
// });


app.listen(3000, function () {
console.log("server started and running on port 3000...");
});