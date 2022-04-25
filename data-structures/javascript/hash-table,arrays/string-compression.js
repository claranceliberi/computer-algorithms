// String Compression: Implement a method to perform basic string compression using the counts 
// of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the 
// "compressed" string would not become smaller than the original string, your method should return 
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

// should we compress uppercase ??

const test = require("../utils/test");



function compress(A){

    let compressed = ''
    let prev = A[0];
    let counter = 1;

    for(let i=1; i<A.length; i++){
        if(A[i] == prev)
            counter++
        else{
            compressed += prev+counter
            counter = 1
            prev = A[i];
        }
        
    }
    compressed += prev+counter
    return compressed.length > A.length ? A : compressed;
}

test(compress,'a2b1c5a3','aabcccccaaa')
test(compress,'abc','abc')
test(compress,'a2b2c2','aabbcc')
test(compress,'aab','aab')