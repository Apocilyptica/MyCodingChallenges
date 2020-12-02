// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// find string length
// split string and replace all but last 4 digits with a #
// put string back together

function maskify(cc) {
    var ccNew = []
    var ccSplit = cc.split('')
    var ccLength = ccSplit.length
    for(var i = 0; i < ccLength; i++) {
        if(i < ccLength -4) {
            ccNew.push('#')
        } else {
            ccNew.push(ccSplit[i])
        }
    }
    return ccNew.join('')
 }


console.log(maskify('12934689872364'));

// Best Practice
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

// Cleaver
// return masked string
function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
  }