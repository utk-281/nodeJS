import mongoose from "mongoose";
import { MONGODB_URL } from "./index.js";

const connectDB = async function () {
  let client = await mongoose.connect(MONGODB_URL);
  console.log("database connected to: ", client.connection.host);
  // await mongoose.connect(process.env.MONGODB_URL);
  //   await mongoose.connect("mongodb://127.0.0.1:27017/user-portal");
  //   await mongoose.connect("mongodb://username:password/user-portal");
  console.log("Database connected");
};

export default connectDB;

// mongodb://localhost:27017 ==> default db test will be created
//! mongodb://localhost:27017/user-portal ==> "user-portal" is the database name
//? if the database is not present, the default test db will be created
//? if the database is present, it will connect to the existing database

//! to use atlas db
//? click on projects >> view all projects >> new project
//? give a project name >> next >> next >> create project
//? then click on create cluster >> select free version >> create deployment
//? don out use special characters in your username and password (@)
//? setup your username and password and click on setup user
//? go to database and network access and under ip addresses ad on ip address --> allow access from anywhere
