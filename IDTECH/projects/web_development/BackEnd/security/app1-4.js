// lv means specific level secureity now removed.  

//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const _ = require("lodash");
const ejs = require("ejs");
//const encrypt = require('mongoose-encryption'); //lv 2
// const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 15;

const app = express();

//console.log(process.env.API_KEY);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/userDB');

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});


//lv2 userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ['password'] });

const User = new mongoose.model("User", userSchema);

app.get("/", function(req, res){
    res.render("home");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    main().catch(err => console.log(err));
    async function main() {

        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        
        const newUser = new User({
            email: req.body.username,
            //password: md5(req.body.password)
            password: hash
        });
        
        const createNewUser = await newUser.save();
        if (!createNewUser){
            res.send("Reload and fill in your details");
        } else {
            res.render("secrets");
        }      
}
});

app.post("/login", function(req, res){
    main().catch(err => console.log(err));
    async function main() {

        console.log(req.body.username, req.body.password);
        const username = req.body.username;
        const password = req.body.password;
        const foundUser = await User.findOne({email: username});
        if (!foundUser){
            res.send("User not found");
        } else {
        const match = await bcrypt.compare(password, foundUser.password);
        
            if(!match) {
                //login
            } else {
                res.render("secrets");
            }
        }
            //...

        // md5 hashing
        // const username = req.body.username;
        // // const password = md5(req.body.password);
        // const password = req.body.password;

        // const foundUser = await User.findOne({email: username});
        // if (foundUser){
        //     if (foundUser.password === password){
        //         res.render("secrets");
        //     }
        // }
    }
});


app.listen(3000, function(){
    console.log("Server started and running on port 3000...")
})