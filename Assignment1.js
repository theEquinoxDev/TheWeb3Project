// Give an input string that outputs a SHA-256 hash that starts with 00000. How will you do it

// Ans: will have to brute force until we find a value that starts with 00000

const crypto = require("crypto");

function findHashWithPrefix(prefix) {
    let input = 0; 
    while(true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)) {
            return {
                input: inputStr,
                hash: hash
            };
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');   // Solving this problem is called Proof of Work   
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);

