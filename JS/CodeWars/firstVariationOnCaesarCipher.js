// The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places up or down the alphabet.

// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

// Coding: Parameters and return of function "movingShift"
// param s: a string to be coded

// param shift: an integer giving the initial shift

// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

// You will also implement a "demovingShift" function with two parameters

// Decoding: parameters and return of function "demovingShift"
// 1) an array of strings: s (possibly resulting from "movingShift", with 5 strings)

// 2) an int shift

// "demovingShift" returns a string.

// Example:
// u = "I should have known that you would have a perfect answer for me!!!"

// movingShift(u, 1) returns :

// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

// and demovingShift(v, 1) returns u. #Ref:

// Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher

function movingShift(s, shift) {
  tempArray = [];
  tempString = "";
  resultA = new Array(5);
  for (var i = 0; i < s.length; i++) {
    handle = false;
    var temp = s.charCodeAt(i);
    if (temp >= 97 && temp <= 122) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) + shift;
      if (tempArray[i] > 122) {
        tempArray[i] = tempArray[i] - 26;
      }
    }
    if (temp >= 65 && temp <= 90) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) + shift;
      if (tempArray[i] > 90) {
        tempArray[i] = tempArray[i] - 26;
      }
    }
    if (!handle) tempArray[i] = s.charCodeAt(i);
    shift++;
    if (shift == 27) shift = 1;
  }

  for (var i = 0; i < tempArray.length; i++) {
    tempArray[i] = String.fromCharCode(tempArray[i]);
  }
  tempString = tempArray.join("");

  var start = 0;
  var end = Math.ceil(tempString.length / 5);
  var i = 0;

  for (var i = 0; i < 5; i++) {
    resultA[i] = tempString.slice(start, end);
    start = end;
    end = end + Math.ceil(tempString.length / 5);
  }

  return resultA;
}

function demovingShift(arr, shift) {
  s = arr.join("");
  tempArray = [];
  resultB = new Array(5);
  for (var i = 0; i < s.length; i++) {
    handle = false;
    var temp = s.charCodeAt(i);
    if (temp >= 97 && temp <= 122) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) - shift;
      if (tempArray[i] < 97) {
        tempArray[i] = tempArray[i] + 26;
      }
    }
    if (temp >= 65 && temp <= 90) {
      handle = true;
      tempArray[i] = s.charCodeAt(i) - shift;
      if (tempArray[i] < 65) {
        tempArray[i] = tempArray[i] + 26;
      }
    }
    if (!handle) tempArray[i] = s.charCodeAt(i);
    shift++;
    if (shift == 27) shift = 1;
  }

  for (var i = 0; i < tempArray.length; i++) {
    tempArray[i] = String.fromCharCode(tempArray[i]);
  }
  resultB = tempArray.join("");
  return resultB;
}

console.log(
  movingShift(
    "I should have known that you would have a perfect answer for me!!!",
    1
  )
);

console.log(
  demovingShift(
    [
      "J vltasl rlhr ",
      "zdfog odxr ypw",
      " atasl rlhr p ",
      "gwkzzyq zntyhv",
      " lvz wp!!!",
    ],
    1
  )
);
// Best Practice
function encode(str, shift) {
  var code, char, sum;
  var sign = Math.sign(shift);
  return str.replace(/[a-z]/gi, function (s, i) {
    code = s.charCodeAt(0);
    char = s.toUpperCase() === s ? 65 : 97;
    sum = code - char + (shift + ((sign * i) % 26) + 26);
    return String.fromCharCode((sum % 26) + char);
  });
}

function movingShift(str, shift) {
  var pos;
  var code = encode(str, shift);
  var size = Math.ceil(str.length / 5);
  return Array.from({ length: 5 }, function (_, i) {
    pos = size * i;
    return code.slice(pos, size + pos);
  });
}

function demovingShift(arr, shift) {
  return encode(arr.join(""), -shift);
}

//  Clever
var upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  downAlpha = "abcdefghijklmnopqrstuvwxyz";
function movingShift(s, dist) {
  return split(shift(s, dist, 1));
}
function demovingShift(arr, dist) {
  return shift(arr.join(""), -dist, -1);
}

function shift(s, dist, step) {
  return s
    .split("")
    .map(function (v, i) {
      var upI = upAlpha.indexOf(v),
        downI = downAlpha.indexOf(v);
      if (upI == -1 && downI == -1) return v;
      if (upI > -1)
        var lib = upAlpha,
          libI = upI;
      else
        var lib = downAlpha,
          libI = downI;
      var loc = (i * step + libI + dist) % 26;
      loc = loc >= 0 ? loc : 26 + loc;
      return lib[loc];
    })
    .join("");
}

function split(s) {
  var sz = Math.ceil(s.length / 5);
  return [
    s.slice(0, sz),
    s.slice(sz, sz * 2),
    s.slice(sz * 2, sz * 3),
    s.slice(sz * 3, sz * 4),
    s.slice(sz * 4),
  ];
}
