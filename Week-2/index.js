// Representing bits and bytes in JS

// 1. Bit
// const x = 0;
// console.log(x);

// 2. Byte
// const x = 202;
// console.log(x);

// 3. Array of Bytes
// const bytes = [202, 244, 1, 23];
// console.log(bytes);

// UInt8Array
// A better way to represent an array of bytes is to use a UInt8Array in JS

// let bytes = new Uint8Array([0, 255, 127, 128]);
// console.log(bytes);

// Why use UInt8Array over native Arrays ? 
// 1. They use less space. Every number takes 64 bits (8 bytes). But every value in a UInt8Array takes 1 byte.
// 2. UInt8Array Enforces constraints - It makes sure every element doesn’t exceed 255

// Verify: 
// What do you think happens to the first element here? Does it throw an error? 

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr); // It makes sure that any number in the array doesn't exceed the limit of 255. 



