const express = require("express");
const request = require("request");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
require("dotenv").config();
const mailchimp = require("@mailchimp/mailchimp_marketing");


app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));




app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const email = req.body.email;

    //console.log("You are welcome " + fName + " " + lName + " Watch out for our Newsletter @" + email);

//     mailchimp.setConfig({
//         apiKey: "c32865e4bc9c6f266b48dcedffd1f6cf-us21",
//         server: "us21",
//       });
      
//     //   async function run() {
//     //     const response = await mailchimp.ping.get();
//     //     console.log(response);
//     //   }
      
//     //   run();

//     const listId = "314117";
//     const subscribingUser = {
//         firstName: fName,
//         lastName: lName,
//         email: email
//     };

// async function run() {
//   const response = await mailchimp.lists.addListMember(listId, {
//     email_address: subscribingUser.email,
//     status: "subscribed",
//     merge_fields: {
//       FNAME: subscribingUser.firstName,
//       LNAME: subscribingUser.lastName
//     }
//   });

//   console.log(
//     `Successfully added contact as an audience member. The contact's id is ${
//       response.id
//     }.`
//   );
// }

// run();
const data = {
    members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fName,
                LNAME: lName
            }
        }
    ]
};

var jsonData = JSON.stringify(data);

// we want to post data to the external server.

const url = "https://us21.api.mailchimp.com/3.0/lists/314117";

const options = {
    method: "POST",
    auth: "idowuseyi1:c32865e4bc9c6f266b48dcedffd1f-us21"
}

const request = https.request(url, options, function(response){
    response.on("data", function(data){
        console.log(JSON.parse(data));
    })
})

request.write(jsonData);
request.end();

});


app.listen(3000, function(){
    console.log("server is running on port 3000");
})


//API_KEY c32865e4bc9c6f266b48dcedffd1f6cf-us21
//LIST_ID 314117  314117
//yarn add @mailchimp/mailchimp_marketing
//# OR
//npm install @mailchimp/mailchimp_marketing