// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    arrTotals = []
    if(arr.length == 0) return 0
    for(var i = 0; i < arr.length; i++) { 
        arrTotals.push(arr.slice(i, arr.length).reduce((a, b) => {
            return a + b
        }))
        for(var l = arr.length; l > i; l--) {
            arrTotals.push(arr.slice(i, l).reduce((a, b) => {
                return a + b
            }))
        }
    } 
    maxTotal = Math.max(...arrTotals)
    return maxTotal > 0 ? maxTotal : 0
}

console.log(maxSequence([29,32,-5,-0,-41,8,-3,-36,-29,-14,-3,43,-10,44,23,-26,-7,-2,-1]));

// Best Practice
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }
  