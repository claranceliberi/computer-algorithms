
// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string 
// has sufficient space at the end to hold the additional characters, and that you are given the "true" 
// length of the string. (Note: If implementing in Java, please use a character array so that you can 
// perform this operation in place.) 
// EXAMPLE 
// Input: "Mr John Smith    ", 13 
// Output: "Mr%20John%20Smith"



function URLfy(A){
    return A.trim().split(" ").join("%20")
}


function urlify(A,N){
    let s = ''
    const totalSpaces = A.length - N;

    for(let i=0; i<N; i++){
        if(A[i] === " ")
            s += '%20'
        else 
            s += A[i]
    }

    return s;
}

console.log(URLfy("Mr John Smith    "))
console.log(urlify("Mr John Smith    ", 13))