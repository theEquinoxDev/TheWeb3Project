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
// 2. Hex    1 character = 4 bits (A single hex character can be any of the 16 possible values: 0-9 and A-F)
// 3. Base64 1 character = 6 bits (Base64 encoding uses 64 different characters ( A-Z , a-z , 0-9 , + , / ), which means each character can represent one of 64 possible values.)
// 4. Base58 It is similar to Base64 but uses a different set of characters to avoid visually similar characters
// and to make the encoded output more user-friendly
// Base58 uses 58 different characters: 

// Uppercase letters: A-Z (excluding I and O )
// Lowercase letters: a-z (excluding l )
// Numbers: 1-9 (excluding 0 )



// Disclaimer: The codes aren't necessary to be written by you scratch everytime. You will get direct conversion functions in cryptolibraries

// UInt8Array to ascii

// function bytesToAscii(byteArray) {
//  return new TextDecoder().decode(byteArray);
// }
// // Example usage:
// const bytes = new Uint8Array([72, 101, 108, 108, 111]); 
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"


// Array to Hex

// function arrayToHex(byteArray) {
//     let hexString = '';
//     for(let i = 0; i < byteArray.length; i++) {
//         hexString += byteArray[i].toString(16).padStart(2, '0');
//     }
//     return hexString;
// }
// // example Usage: 
// const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
// const hexString = arrayToHex(byteArray);
// console.log(hexString);


 // Base64 Encoding

// const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// const base64Encoded = Buffer.from(uint8Array).toString("base64");
// console.log(base64Encoded); // output: SGVsbg8=
// Base64 adds = to pad the output so the length stays a multiple of 4.

// Hashing Vs Encryption

// Hashing is the process of converting data into a fixed-size string of characters, which typically appears random. 
// Algorithms: SHA-256, MD5

// Encryption is the process of converting plain text data into an unreadable format, called ciphertext, using a specific algorithm and a key. The data can be decrypted back to its original form only with the appropriate key. 
// It is reversible. 
// Two types: Symmetric and Asymmetric encryption
// 1. Symmetric: The same key is used for both encryption and decryption
// 2. Asymmetric: Different keys are used for encryption (public key) and decryption (private key)
// Public key: It is a string that can be shared with the world openly. 
// Private Key: a secret code that must be kept confidential. It is used to decrypt data or to create digital signatures. 
// Algorithms: RSA, ECDSA (Eth and BTC), EdDSA(Sol)






