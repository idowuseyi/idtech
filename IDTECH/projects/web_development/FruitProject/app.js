const mongoose = require('mongoose');

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

    const fruitSchema = new mongoose.Schema({
        name: String,
        //we can verify the input while creating our schema
        rating: {
            
        },
        review: String
    });

    const Fruit = mongoose.model("Fruit", fruitSchema); //mongo will drop the capital on the f and pluralised it. It uses lodah beind the scenes.

    // const fruit = new Fruit ({
    //     name: "Apple",
    //     rating: 7,
    //     review: "Pretty solid as a fruit."
    // });

    //fruit.save();
    
    // const personSchema = new mongoose.Schema({
    //     name: String,
    //     age: Number
    // });

    // const Person = mongoose.model("Person", personSchema);

    // const person = new Person ({
    //     name: "John",
    //     age: 37
    // });

    // person.save();

    

    // await Movies.insertMany([
    //     {
    //         name: "kiwi",
    //         score: 10,
    //         review: "The best fruit!"
    //     },
    
    //     {
    //         name: "Orange",
    //         score: 4,
    //         review: "Too sour for me"
    //     },
    
    //     {
    //         name: "Banana",
    //         score: 3,
    //         review: "Weird texture"
    //     }
    //   ]);

    //   Fruit.insertMany([kiwi, orange, banana], function(err){
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Successful saved all the fruits to fruitsDB");
    //     }
    // });

    //   await Fruit.insertMany([
    //     {
    //         name: "kiwi",
    //         score: 10,
    //         review: "The best fruit!"
    //     },
    
    //     {
    //         name: "Orange",
    //         score: 4,
    //         review: "Too sour for me"
    //     },
    
    //     {
    //         name: "Banana",
    //         score: 3,
    //         review: "Weird texture"
    //     }
    //   ]);

      // finding items on the db

      fruits = await Fruit.find({});

      // close the db connection
      mongoose.connection.close();

      fruits.forEach(fruit => {
        console.log(fruit.name);
      });


}

