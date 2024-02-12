require("dotenv").config();

//const appid = process.env.API_ID;
const apkey = process.env.APP_ID;
console.log(apkey);


const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: apkey,
  server: "us21",
});

// const run = async () => {
//   const response = await client.lists.getAllLists();
//   console.log(response);
// };

// run();

const run = async () => {
  const response = await client.lists.getList("314117");
  console.log(response);
};

run();


