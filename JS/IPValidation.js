// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

// split the string at the "." into elements of an array
// if array does not have 4 elements return false
// if any number in the array is less than 0 or greater than 255 return false
// if any element in the array greater than 1 digit starts with a 0 return false
// if any element contains letters return false

function isValidIP(str) {
    if(str.split('.').length != 4) return false
    var arr = str.replace(/[^0-9]/g, '.').split('.')
    if(arr.length != 4) return false
    for(var i = 0; i < 4; i++){
        if(arr[i] < 0 || arr[i] > 255 || arr[i] == '') return false
        if(arr[i].length > 1 && arr[i][0] == 0) return false
    } 
    console.log(arr);
    return true
  }

console.log(isValidIP("0.0.0.0"));

// Best Practice
function isValidIP(str) {
    return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
  }

// Clever
function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
  }