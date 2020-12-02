// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// split string
// convert array to set
// remove duplicate letters, number, and symbols if any
// is there 28? if so true

function isPangram(string){
    newString = [...new Set(string.toLowerCase())].toString().replace(/[^a-zA-Z]/g, '').toLowerCase();
    return [...new Set(newString)].length === 26;
  }

  console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));