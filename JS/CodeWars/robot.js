// Can the robot reach the given destination or not? //
// You have a 2d array representing a grid of paths
// You have a robot starting at  column 0 and row 0
// You have a destination representing a column idx as first the first item, and row idx as the second item in an array
// There are walls that the robot can NOT move through represented by 0's
// if the given cell is represented by a 1 the robot can move to it
// The robot can only move to the right OR down UNLESS moving to a previous position
// EXAMPLE INPUT
// [[1, 1, 1, 0],[1, 0, 1, 0],[1, 0, 1, 1]], [2, 3]
// EXAMPLE OUTPUT
// True
const canRobotReachDestination = (grid, destination) => {
  var robotArray = [...Array(grid.length)].map((e) => Array(grid[0].length).fill(false));
  if (grid[0][0] == 1) {
    robotArray[0][0] = true;
  }
  for (var row = 0; row <= grid.length - 1; row++) {
    for (var col = 0; col <= grid[row].length - 1; col++) {
      if (row + 1 < grid.length) {
        if (grid[row + 1][col] == 1 && robotArray[row][col] === true) robotArray[row + 1][col] = true; // Check down
      }
      if (col + 1 < grid[row].length) {
        if (grid[row][col + 1] == 1 && robotArray[row][col] === true) robotArray[row][col + 1] = true; // Check Right
      }
    }
  }
  return robotArray[destination[0]][destination[1]];
};

console.log(
  canRobotReachDestination(
    [
      [1, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 0, 1, 1],
    ],
    [2, 3]
  )
);
