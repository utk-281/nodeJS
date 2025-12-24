//! 1) whenever we are installing any modules from npm or any other managers, we must have one file "package.json" --> inside root of the folder
//! to create .json file open cmd with correct path and type
//? "npm init -y"

//~ 2) now install the module --> npm i/install package_name
// "npm i mongodb"
// express-async-handler

//! 1) a folder will be created
//! 2) a file will be created
//! 3) dependencies will be added in .json file
//& these all will be discussed again in express

//! ~1) we have to connect or nodeJS project with mongodb --> class MongoClient
//~ 2) connect() which is present inside the MongoClient
//~ 3) create a database with the help of db("databaseName")
//~ 4) create a collection with the help of createCollection("collectionName")

// const mongodb = require("mongodb");
import mongodb from "mongodb";
// console.log(mongodb.MongoClient.connect);

async function connectDB() {
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  //   console.log(client.db);
  let database = client.db("NodeJS");
  //   console.log(database.collection);
  let collection = await database.createCollection("nodeCollection");
  console.log("collection created");

  //! =============== CRUD op ===============================
  //~  create/insert --> insertOne({})/insertMany([])

  // let result = await collection.insertOne({ name: "ashwin", age: "34" });
  // console.log("data inserted");
  // console.log(result);

  // let results = await collection.insertMany([
  //   { name: "ashwini", age: 34 },
  //   { name: "varun", age: 34, _id: "123" },
  // ]);
  // console.log(results);

  //~  read/fetch --> findOne({filter})/find({filter})
  // let user = await collection.findOne({ name: "ashwini" });
  // console.log(user);

  // let users = collection.find(); //? this will return a cursor object
  // // console.log(users);
  // //? simplest way to print all documents --> use toArray()
  // console.log(await users.toArray());

  // let users = await collection.find().toArray();
  // console.log(users);

  //~  update --> updateOne({filter}, {updation value})/updateMany({filter}, {updation value})

  // let updatedResponse = await collection.updateMany(
  //   { age: 34 }, //? filter obj
  //   { $set: { hasInsurance: true } } //? updation object
  // );
  // console.log(updatedResponse);

  //~  delete --> deleteOne({filter})/deleteMany({filter})

  // let resp = await collection.deleteOne();
  // console.log(resp);

  // let resp = await collection.deleteMany({});
  // console.log(resp);
}

// connectDB();
