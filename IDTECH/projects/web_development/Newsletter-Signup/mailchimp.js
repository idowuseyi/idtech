// const mailchimp = require("@mailchimp/mailchimp_marketing");

// mailchimp.setConfig({
//   apiKey: "c32865e4bc9c6f266b48dcedffd1f6cf-us21",
//   server: "us21",
// });

// async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
// }

// run();

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const response = await client.lists.createList({
    name: "name",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "city",
      country: "country",
    },
    campaign_defaults: {
      from_name: "from_name",
      from_email: "Beulah_Ryan@hotmail.com",
      subject: "subject",
      language: "language",
    },
  });
  console.log(response);
};

run();
