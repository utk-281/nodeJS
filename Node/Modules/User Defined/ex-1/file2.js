// //! in commonJS we have two ways to import(require) something

// //~ 1) const variableName = require("path of the file") // relative path
// // const value = require("./file1.js");
// // // console.log(value);
// // console.log(value.printName("abc"));
// // console.log(value.arr);
// // console.log(value.obj);

// /*
// {
//   printName: [Function: printName],
//   arr: [ 1, 2, 3, 4 ],
//   obj: { address: 'something', pincode:
//  201301 }
// }
//  */

// //~ 2) const {k1, k2, ....} = require("path of the file") // relative path (destructuring)
// const { printName, arr, obj } = require("./file1");
// printName("def");
// console.log(arr);
// console.log(obj);

//& >>>>>>>>>>>>>>>>>>>>> ESM <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// //! in ESM one way to import named export (always use extension .js)
//? import {keys} from "path of the file"

// import { arr, obj, sum } from "./file1.js";
// console.log(sum(1, 1));
// console.log(arr);
// console.log(obj);
