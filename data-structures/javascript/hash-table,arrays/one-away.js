const test =  require('../utils/test')

// One Away: There are three types of edits that can be performed on strings: insert a character, 
// remove a character, or replace a character. Given two strings, write a function to check if they are 
// one edit (or zero edits) away

// EXAMPLE 
// pale, ple -> true , VALID, (we made only one deletion)
// pales, pale -> true , VALID, we made one deletion
// pale, bale -> true  , VALID (we made only one replacement)
// pale, bake -> false , NOT VALID (we made two replacement)
// pale, pale -> ????

// operations INSERT,REMOVE, REPLACE
// pale,pales -> false, NOT VALID (we added/concatinated which is not valid)
// pale, apale -> false, NOT VALID (we added/concatinated which is not valid)


// O(N^2)
function oneAway(A,B){
    

    // there are more than one replacement
    if(Math.abs(A.length - B.length) > 1 || B.length > A.length)
        return false;

    return oneChange(A,B) || oneChange(B,A)
}

function oneChange(A,B){
    let replaceMent = 0;

    for(let i=0; i < B.length; i++){
        const exists = A.indexOf(B[i])

        if(exists < 0)
            replaceMent++
    }

    console.log(A,B,replaceMent)
    return replaceMent == 1;
}


// Test

test(oneAway,true,'pales', 'pale')
test(oneAway,true,'pale', 'bale')
test(oneAway,false,'pale', 'bake')
test(oneAway,true,'pale', 'ple');

