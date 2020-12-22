// create a program to print the number 1 - n

// create a function printNumbers() with a parameter of n
// create a variable start at 1
// lets call the function and pass in the argument of n
//  example: printNumbers(5)
//  this example should print 1, 2, 3, 4, 5
// in order to do this I need a for loop

function printNumber(end) {
  let start = 0;
  for (let i = start; i < end; i++) {
    console.log(i);
  }
}

printNumber(5);
