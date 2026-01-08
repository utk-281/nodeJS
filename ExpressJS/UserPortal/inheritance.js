class A {
  //! constructor function --> initialize the variables

  constructor(username) {
    this.username = username;
  }

  displayName() {
    console.log(this.username);
  }
}

// let objOfA = new A("abc");
// objOfA.displayName();

// let anotherObjOfA = new A("def");
// anotherObjOfA.displayName();

// console.log(objOfA.username);

// console.log(A.age);
// // console.log(A.username);

// new Error("hi");

// class B extends A {
//   constructor() {
//     super(); // super call statement --> calls the constructor of the parent class
//   }
//   // extra features
// }

// let objOfB = new B("xyz");
// objOfB.displayName();

// // youtube
// class YT {
//     // watching v
//     // comm
//     // ads
//     //....
// }

// class YTS extends YT {
//     // extra features
//     // skip add
//     // 4k
// }
