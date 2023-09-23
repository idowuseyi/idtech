const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const myDB = client.db("fruitsDB");
    const myColl = myDB.collection("fruits");

// try {
//    const docs = [
//     {
//         name: "Apple",
//         score: 8,
//         review: "Great fruit"
//     },
//     {
//         name: "Orange",
//         score: 6,
//         review: "Kinda sour"
//     },
//     {
//         name: "Banana",
//         score: 9,
//         review: "Great stuff!"
//     }
//    ];

//    const insertManyresult = await myColl.insertMany(docs);
//    let ids = insertManyresult.insertedIds;

//    console.log(`${insertManyresult.insertedCount} documents were inserted.`);
//    for (let id of Object.values(ids)) {
//       console.log(`Inserted a document with id ${id}`);
//    }
// } catch(e) {
//    console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
//    let ids = e.result.result.insertedIds;
//    for (let id of Object.values(ids)) {
//       console.log(`Processed a document with id ${id._id}`);
//    }
//    console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
// }
 
    const findResult = await myColl.find(); // no query
//await myColl.find({}); // empty query

    for await (const doc of findResult) {
        console.log(doc);
    }

} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// // connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'fruitsDB';

// // create a new MongoClient
// const client = new MongoClient('mongodb://localhost:27017?tls=true');

// // Use connect method to connect to the server
// client.connect(function(err) {
//     assert.equal(null, err);
//     console.log("Connected successfully to the server");

//     const db = client.db(dbName);

//     client.close();
// });

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'fruitsDB';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// const myDB = client.db("myDB");
// const myColl = myDB.collection("pizzaMenu");

// const doc = { name: "Neapolitan pizza", shape: "round" };
// const result = await myColl.insertOne(doc);
// console.log(
//    `A document was inserted with the _id: ${result.insertedId}`,
// );



// const myDB = client.db("myDB");
// const myColl = myDB.collection("pizzaMenu");

// const docs = [
//    { name: "Sicilian pizza", shape: "square" },
//    { name: "New York pizza", shape: "round" },
//    { name: "Grandma pizza", shape: "square" }
// ];

// const insertManyresult = await myColl.insertMany(docs);
// let ids = insertManyresult.insertedIds;

// console.log(`${insertManyresult.insertedCount} documents were inserted.`);

// for (let id of Object.values(ids)) {
//    console.log(`Inserted a document with id ${id}`);
// }