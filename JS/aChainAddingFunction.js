// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15
// and so on.

// A single call should return the number passed in.

// add(1); // 1
// We should be able to store the returned values and reuse them.

// var addTwo = add(2);
// addTwo; // 2
// addTwo + 5; // 7
// addTwo(3); // 5
// addTwo(3)(5); // 10
// We can assume any number being passed in will be valid whole number.

// currying functions
// currying is the technique of translating the evaluation 
//  of a function that takes multiple arguments (or a tuple of arguments) 
//  into evaluating a sequence of functions, each with a single argument.

// This function will allow n number of arguments and return proper total

function add(n) {
    const sum = (y) => add(n + y);
    sum.valueOf = () => n;
    return sum
  }
// still really confused

// best practice
function add(n){
    var fn = function(x) {
      return add(n + x);
    };
    
    fn.valueOf = function() {
      return n;
    };
    
    return fn;
  }