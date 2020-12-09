// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

// base case any number < or = 1 cannot be prime
// any total of i * i greater than the value of num cannot be prime
// test all integers not in the above requirements against num using remainder syntax ie num % i
// any results of 0 from num & i cannot be prime

function isPrime(num) {
    for(var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false
        }
    } return num > 1;
} 

console.log(isPrime(73));

// best practice
function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  }