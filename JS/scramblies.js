// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// only str1 is scrambled
// convert into array (left as string)
// iterate thru all values of str2 and find matching pair
// declare false if just one iteration does not find matching pair
// need to remove letters from str1 so that if str2 has 2 of the same letter and str1 only has one then its false
// need to refactor current time 1hr 45min
// start over tmrw

function scramble(str1, str2) {
    
}

console.log(scramble('cedewaraaossoqqyt','codewars'));