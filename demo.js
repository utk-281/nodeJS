let promise = new Promise((res, rej) => {
  let a = 20;
  if (a == 20) res({ name: "abc", age: 34 });
  else rej("false");
});

// console.log(promise);
promise
  .then((abc) => {
    // console.log("promise success");
    console.log(abc);
    return abc;
  })
  .then((payload) => {
    console.log(payload.name);
  })
  .catch((xyz) => {
    // console.log("promise failure");
    console.log(xyz);
  });
