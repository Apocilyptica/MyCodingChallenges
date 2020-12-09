// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// search string for first number and split into array ie fooo0999 = ['fooo', '0999']
// remove all letters from string maybe symbols? will there be numbers surrounded by letters ie foo2bar01?
// increment remaining number by 1 or append a 1 if no numbers are left
// must include zeros infont of number ie 0099 = 0100

function incrementString (strng) {
    var str1 = strng.replace(/[0-9]/g, '')
    var str2 = strng.replace(/[^0-9]/g, '')
    if(str2 == '') return strng.concat(1)
    var noZero = (parseInt(str2, 10) + 1).toString()
    if(str2.length <= noZero.length) {
        str2 = noZero
    } else {
    str2 = str2.slice(0, str2.length - noZero.length) + noZero
    }
    return str1 + str2
} 


  console.log(incrementString("foobar0099"));

//   Best Practice on Code Wars
function incrementString(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }
// Best Practice My vote
function incrementString(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, '0');
      });
  }

// clever
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)