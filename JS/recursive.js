function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}

console.log(countdown(10));

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const countArry = rangeOfNumbers(startNum + 1, endNum);
    countArry.unshift(startNum);
    return countArry;
  }
}

console.log(rangeOfNumbers(6, 9));
