// Array = [ 45, 67, 4, 34, 7, 89, 10 ]

function meanFor(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total / array.length;
}

function meanWhile(array) {
  let total = 0;
}

let array = [45, 67, 4, 34, 7, 89, 10, -5];
let maxNum = 0;
let minNum = 0;
for (let i = 0; i < array.length; i++) {
  if (maxNum < array[i]) {
    maxNum = array[i];
  }
  if (minNum > array[i]) {
    minNum = array[i];
  }
}
console.log(maxNum);
console.log(minNum);

function median(array) {
  let sortedArray = array.sort((a, b) => a - b);
  return sortedArray;
}

// let array = [45, 67, 4, 34, 7, 89, 10, -5];
// console.log(meanFor(array));
// console.log(range(array));

// console.log(median(array));
