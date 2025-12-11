//! fs --> file system. this module is used to interact with files and folders present in the OS
//~ interaction means --> CRUD (create, read, update, delete)
// syntax --> const variable_name = require("node:module_name")
// syntax --> import variable_name from "node:module_name"

// const fs = require("node:fs") // name of the module
import fs from "fs";

//!  ================================= using fs synchronously ================================

//? 1) create a file
// method name ==> writeFileSync()
// syntax --> fs.writeFileSyn("path/name", "data/content")
//& we can pass any extension to the file

// console.log("1");
// fs.writeFileSync("./someOther.json", `{"key2":"value2"}`);
// console.log("file created");
// console.log("2");
// console.log("3");
//? if the file is already present, then all the previous data will be over-written

//?  2) reading a file (get/fetch)
// method name --> readFileSync()
// syntax--> readFileSync("path", "encoding")

let read = fs.readFileSync("./someOther.json");
console.log(read);
