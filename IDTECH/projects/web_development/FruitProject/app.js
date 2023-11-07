const mongoose = require('mongoose');

// Connection
//mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

    const fruitSchema = new mongoose.Schema({
        name: {
            // we can also make a field required. By changing the field value to an object
            type: String,
            required: [true, 'Check your entry, Why no name?']
        },
        //we can verify the input while creating our schema
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    });

    const Fruit = mongoose.model("Fruit", fruitSchema); //mongo will drop the capital on the f and pluralised it. It uses lodah beind the scenes.

    const fruit = new Fruit ({
        name: "Pawpaw",
        rating: 8,
        review: "Pretty interesting in all ways."
    });

   // fruit.save();
    
    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        favouriteFruit: fruitSchema // this is used to establish relationship bwtween the person table and the fruit table
    });

    const pineapple = new Fruit({
        name: "Pineapple",
        Score: 9,
        review: "Great fruit."
    });

    // pineapple.save();

    const mango = new Fruit({
        name: "Mango",
        Score: 7,
        review: "Stong and shakking"
    });
    // mango.save();

    const Person = mongoose.model("Person", personSchema);

    const person = new Person ({
        name: "Aanu",
        age: 12,
        favouriteFruit: pineapple
    });

    // person.save();

    
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

      fruits.forEach(fruit => {
        console.log(fruit.name);
      });

      // updating
    //   const res = await Fruit.updateOne({_id: "650f6ae9af533267b47b23ca"}, {name: "Pawpaw"});
    //   const res = await Person.updateOne({_id: "650f77c0f4d0e15763f29553"}, {favouriteFruit: mango});
      //console.log(res.matchedCount);

      // Deleting one
    //   await Fruit.deleteOne({name: "Pineapple"});
    //   await Person.deleteOne({name: "Aanu"});

      // Delete many
    //   await Person.deleteMany({name: "John"});

    // Establishinf relationships using mongoose

      // close the db connection
      mongoose.connection.close();

}

