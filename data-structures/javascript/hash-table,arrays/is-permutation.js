// Given two strings, write a method to decide if one is a permutation of the
// other.


// this one is strick and checks alot of things
function isPermutation(A,B){
    let same=0;

    if(A.length != B.length)
        return false;
    else {
        for(let i =0; i < B.length; i++){
            const id = A.indexOf(B[i])
    
            if( A[id] == B[i])
                same++
    
            if(id < 0)
                return false
        }
    
        if(same == A.length) return false
    

        return true
    }

}

// this one ignores capslock, and doesn't care much about  the string are equal

function isPermutation2(A,B){
    if(A.length != B.length)
        return false;
    else {
        const sortedA = A.split('').sort().join('')
        const sortedB = A.split('').sort().join('')

        return sortedA == sortedB
    }
}

console.log(isPermutation('ABC','ACB'), true)
console.log(isPermutation('ABC','ACBD'), false)
console.log(isPermutation('ABC','BaC'), false)
console.log(isPermutation('ABC','ABC'), false)

console.log('---------------')

console.log(isPermutation2('ABC','ACB'), true)
console.log(isPermutation2('ABC','ACBD'), false)
console.log(isPermutation2('ABC','BaC'), false)
console.log(isPermutation2('ABC','ABC'), false)
