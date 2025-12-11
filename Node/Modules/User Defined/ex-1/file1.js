// //! performing import(require), export(module.exports) using commonJS (be default in nodeJS)
// function printName(name) {
//   console.log("hello", name);
//   return 123;
// }

// let obj = {
//   address: "something",
//   pincode: 201301,
// };

// let arr = [1, 2, 3, 4];

// //~ 1) 1st way of exporting --> using module.exports we can only export one thing at a time
// module.exports = obj;
// module.exports = printName;
// module.exports = arr;
// // module and exports these are keywords

// //~ 2)
// module.exports = {
//   printName,
//   arr,
//   obj,
// };

// //! code, logic , business logic

// //! performing import(require), export(module.exports) using ES-modules (import and export))
//? 1) named export --> what ever we are exporting using named export, use destructuring to import
// syntax  --> export let/const identifier = value

//? 2) default export --> we can use one default export per at a time
// syntax  --> export default identifier

// export let sum = (a, b) => {
//   return a + b;
// };

// export let obj = {
//   name: "abc",
// };
// export const arr = [1, 2, 3, 4];

let abcde = (a, b) => {
  return a + b;
};

export default abcde;
// export default arr = [1,2,3]
