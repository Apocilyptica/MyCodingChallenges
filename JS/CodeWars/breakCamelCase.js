// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"


// find capitol letters
// insert space before
// must iterate thru each capitol letter one at a time to prevent double or triples ect... messing things up
// make array of all words then put space in front of the capitol
// join array back to string
//  15min in

function solution(string) {
    i = 0
    while(i < string.length){
        if(string[i] === string[i].toUpperCase()) {
            string = string.substring(0, i) + ' ' + string.substring(i, string.length)
            i++
        }
        i++
    } return string
}

console.log(solution("newPartLifeLife"));


// Best Practice
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }