// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

function validate(password) {
    digitTest = /(?=.*\d)/.test(password)
    lowerTest = /(?=.*[a-z])/.test(password)
    upperTest = /(?=.*[A-Z])/.test(password)
    lengthTest = /(.{6,}$)/.test(password)
    spaceTest = /^.*\s/.test(password)
    console.log(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(\w{6,})$/.test(password));
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(\w{6,})$/.test(password)
  }

console.log(validate('djI38D 55'));

