function addTwoDigits(n) {
    console.log(n%10);
    return n%10 + Math.floor(n/10)
}

console.log(addTwoDigits(54));