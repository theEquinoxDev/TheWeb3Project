// Give an input string that outputs a SHA-256 hash that starts with 00000. Now, the input string should start with 100xdevs. How would the code change


const crypto = require("crypto");

function findHashWithPrefix(prefix) {
    let input = 0; 
    while(true) {
        let inputStr = "100xdevs" + input.toString();
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

const result = findHashWithPrefix('00000');    
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);