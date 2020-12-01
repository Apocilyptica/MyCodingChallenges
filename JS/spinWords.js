// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// create a string varible
// turn string into an array
// find 5 or more letter words and reverse them
// turn array back into string
// return string

function spinWords(str) {
    var strSplit = str.split(' ');
    var newString = [];
    var finalStr = [];
    var reverseWord = "";
    for(var i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length >= 5) {
            var word = strSplit[i].split('');
            reverseWord = word.reverse().join('');
            newString.push(reverseWord)
        } else {
            newString.push(strSplit[i])
        }
    }
    console.log("'" + newString.join(' ') + "'");
    finalStr = newString.join(' ')
    return finalStr
}

spinWords("Welcome to the jungle")

// best practice
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

// Clever
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }
