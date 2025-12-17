//~ Buffer is a global object

let buffer1 = Buffer.from("NodeJS");
// console.log(buffer1); // <Buffer 4e 6f 64 65 4a 53>
// console.log(buffer1.toJSON());

buffer1.write("something");
console.log(buffer1); // <Buffer 4e 6f 64 65 4a 53>
console.log(buffer1.toJSON());
console.log(buffer1.toString());

let buffSize = Buffer.alloc(34);

/*  JSON Data
{ type: 'Buffer', 
 data: [ 78, 111,100, 101, 74, 83 ] 
}
*/
