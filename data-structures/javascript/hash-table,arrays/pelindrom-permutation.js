

// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation 
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
// EXAMPLE 
// Input: Tact Coa 
// Output: True (permutations: "taco cat", "atco eta", etc.) 

/**
 * here is a list of perindrome, a perindrome world almost all characters exist more than once, ] 
 * but there might be a chance that one, and only one character can exist once
 * 
 * EXAMPLE 
 *  peep -> 2 p and 2 e
 *  civic -> 2 c, 2 i and 2 v
 */

// civic
// DVD
// gig
// kayak
// level
// madam
// nan
// peep
// poop
// radar
// redder
// refer
// solos
// stats
// wow

// O(n)
function perlindromPerm(A){
    const curr = {}
    let occurence = 0;

    for(let i=0; i<A.length; i++){
        
        if(!curr[A[i]]) curr[A[i]] = 0

        curr[A[i]] = curr[A[i]]++

        if(curr[A[i]] < 2)
            occurence++
        else
            occurence--
    }

    return occurence < 2
}


console.log(perlindromPerm('Tact Coa'), 'true');
console.log(perlindromPerm('Tact boa'), 'false');
