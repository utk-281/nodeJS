// const path = require("path");
import path from "path";
console.log(path.basename);

// console.log(path);

//! basename("/users/folder1/filename.txt")

// console.log(__filename);
// console.log(path.basename(__filename));

//! extname()
// console.log(path.extname("/users/folder1/filename.txt"));
// console.log(path.extname("/users/folder1"));
// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));

//! parse()
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

//! format({}) ==> ""

//! join(path1, path2, ......)

// console.log(path.join("f1", "f2")); // f1\f2
// console.log(path.join("backend", "controllers", "user.js"));

// console.log(path.join(__dirname, "..", "..", "modules.js"));

// console.log(path.join(__dirname, "..", "..", "..", "JavaScript", "index.html")) ;// this will not work, if we are using import/export ESM

console.log(__dirname);

console.log(import.meta.dirname);
console.log(import.meta.filename);
