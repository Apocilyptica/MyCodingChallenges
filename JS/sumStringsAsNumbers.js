// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// turn each string into integer
// add the two integers
// turn back into string
// ran into large number issue
// need to resort to basic addition starting with end number adding then carring to next number
// need a for loop for the greatest length of a or b
// convert string value into integer if NaN return a 0
// add intergers of each string at -1 - i + the previous carry value
// push value at -1 of new integer into new string
// if new integer is greater than 1 digit store value at 0 into a carry var




function sumStrings(a,b) { 
    if(b.length > a.length) {
        let temp = a;
        a = b;
        b = temp;
    }

    var carry = 0;
    let digitalSum;
    let temp;
    var sumStr = "";

    for (var i = 0; i < a.length; i++) {
        var aNum = parseInt(a.charAt(a.length - 1 - i));
        var bNum = parseInt(b.charAt(b.length - 1 - i));
        bNum = (bNum) ? bNum : 0;
        temp = (aNum + bNum + carry).toString();
        digitalSum = temp.charAt(temp.length - 1);
        carry = parseInt(temp.substr(0, temp.length - 1))
        carry = (carry) ? carry : 0

        sumStr = (i === a.length - 1) ? temp + sumStr : digitalSum + sumStr
    }
    return sumStr.replace(/^0+/, '');
}

console.log(sumStrings('00000000697822187012947294170922381494', '824880779292664021422054830415'));

// Best Practices
function sumStrings(a, b) {
    var res = '', c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop();
      res = c % 10 + res;
      c = c > 9;
    }
    return res.replace(/^0+/, '');
  }