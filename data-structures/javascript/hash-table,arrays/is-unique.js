// Implement an algorithm to determine if a string has all unique characters. What if you 
// cannot use additional data structures?


// this involves additional data structure
function isUnique(A){
    var hash = {}

    for(let i=0; i<A.length; i++){
        if(hash[A[i]]){
            return false
        }
        else{
            hash[A[i]] = true
        }
    }

    return true
}


// this uses O(N^2) but does not use any additional data structure
function isUnique2(A){
    
    for(let i=0; i<A.length; i++){
        for(let j=i+1; j<A.length; j++){
            if(A[i] === A[j]){
                return false // if match return false
            }
        }
    }
    
    return true; // after all there is no match , so return true
}

console.log(isUnique('abcd'))
console.log(isUnique('abcda'))
console.log(isUnique2('abcd'))
console.log(isUnique2('abcda'))