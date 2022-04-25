// String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring 
// of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one 
// call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

const test = require("../utils/test");

 // is substring must return and index


function isSubstring(mainText,textToCheck){
    return mainText.includes(textToCheck)
}


function stringRotation(s1,s2){
return isSubstring(s2+s2,s1)
}

test(stringRotation, true,'waterbottle', 'erbottlewat');
test(stringRotation, false,'waterbottle', 'erbotlewatt');
test(stringRotation, true,'aaata', 'aataa');
