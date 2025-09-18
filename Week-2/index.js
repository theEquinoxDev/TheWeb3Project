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
// Example with Uint8Array:


// let uint8Arr = new Uint8Array([0, 255, 127, 128]);
// uint8Arr[1] = 300;
// console.log(uint8Arr); 
// Output: Uint8Array(4) [0, 44, 127, 128]

// Notes:
// A Uint8Array stores numbers from 0 to 255.  
// If you assign a number outside this range, it wraps around using modulo 256 (like a circle).  
// For example:
//   256 becomes 0
//   257 becomes 1
//   300 becomes 44
// This is different from Uint8ClampedArray, which clamps values to 0–255 instead of wrapping.

// let str = "h";
// const binaryRepresentation = new TextEncoder().encode(str); // TextEncoder is a class which encodes some text ("h" here) into binary! 
// console.log(binaryRepresentation);
// maximum value of a byte = 255;


// #Encoding
// Some common encodings include -
// 1. Ascii  1 character = 7 bits
// 2. Hex
// 3. Base64
// 4. Base58

// UInt8Array to ascii
function bytesToAscii(byteArray) {
 return new TextDecoder().decode(byteArray);
}
// Example usage:
const bytes = new Uint8Array([72, 101, 108, 108, 111]); 
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello"

