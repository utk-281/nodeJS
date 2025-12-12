//! fs --> file system. this module is used to interact with files and folders present in the OS
//~ interaction means --> CRUD (create, read, update, delete)
// syntax --> const variable_name = require("node:module_name")
// syntax --> import variable_name from "node:module_name"

const fs = require("node:fs"); // name of the module

//!  ================================= using fs synchronously ================================

//? 1) create a file
// method name ==> writeFileSync()
// syntax --> fs.writeFileSyn("path/name", "data/content")
//& we can pass any extension to the file

// console.log("1");
// fs.writeFileSync("./someOther.json", ` `);
// console.log("file created");
// console.log("2");
// console.log("3");
//? if the file is already present, then all the previous data will be over-written

//?  2) reading a file (get/fetch)
// method name --> readFileSync()
// syntax--> readFileSync("path", "encoding")

//! (0s and 1s)binary
// hello 123 --> binary
//~ character set --> each english letter and some special characters and numbers are represented by a unique character set (number) designated by ASCII (126 character) UNICODE

//~ character encoding --> while converting to binary, encoding defines how many bits will it take to store a value
// 1 byte = 8 bits

//? why utf-8 is popular --> // backward compatibility & variable length encoding

// console.log("start");
// console.log("middle");

// let content = fs.readFileSync("../../../demo.js");
// console.log(content);
// /* // <Buffer 6c 65 74 20 75 73 65 72 6e 61
// 3d 20 ... 60 more bytes> */ // --> buffer is like an array which stores data in binary form

// let readableContent = content.toString(); // default encoding value of toString() is utf-8 (unicode transformation format)
// console.log(readableContent);

// let res = fs.readFileSync("../modules.js", "utf-8");
// console.log(res);

// // console.log(Buffer.from(res));

// console.log("end");

//?  3) updating(appending) a file --> only used to add data at the last of the file
// method name --> appendFileSync()
// syntax --> appendFileSync("path", "data to be appended")

// console.log(1);
// console.log(2);
// fs.appendFileSync("./server.js", "data");

// console.log(3);

//! using appendFileSync() if the file is not present at the specified path, then it will create a new file other-wise it will append the data at the end of the file

//? 4) deleting a file
// method name --> unlinkSync()
// syntax --> unlinkSync("path")

// try {
//   fs.unlinkSync("../../../demo.js");
//   console.log("file deleted");
// } catch (error) {
//   if (error.code === "ENOENT") {
//     console.log("file not found");
//   } else {
//     console.log(error);
//   }
// }

//? 5) creating a folder
// method name --> mkdirSync()
// syntax --> mkdirSync("path/name")

//! create this folder structure -> backend/controller/user.js
function createStructure() {
  fs.mkdirSync("./backend");
  fs.mkdirSync("./backend/controller");
  fs.writeFileSync("./backend/controller/user.js", "let a  = 20");
}

createStructure();
