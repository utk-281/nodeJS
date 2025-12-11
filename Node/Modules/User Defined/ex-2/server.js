console.log("this is server");

function greet(name) {
  console.log("hello", name);
}

greet("server");

module.exports = greet;

console.log("this is end");
