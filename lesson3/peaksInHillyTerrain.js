// Write a function `findPeakInTerrain` that finds any peak in a
// given hilly terrain. A peak is an element that is strictly
// greater than its neighbors. The first and last elements can
// be peaks if they are strictly greater than their single neighbor.
// Adjacent elements in the terrain cannot be equal.

// The function should take an array of integers as input,
// representing the elevations of spots in the terrain.
// It should return the index of any peak in the terrain.
// There is guaranteed to be at least one peak in the input array.

// Example:
// Input: terrain = [1, 3, 2, 1, 4, 5]
// Output: 1 or 5
// Explanation: Both index 1 (elevation 3) and index 5
//              (elevation 5) are peaks.

/*
Problem:
Input: Array of nums
Return: A peak (index), if there are multiple peaks only need to return one of them

Rules:
  Explicit:
    - The peaks can be in the first index or last
    - There can be more than 1 peak
    - There is always a peak
  Implicit:
    - A peak is an integer where the left and right side are lower
    - If it's the first element, index 1 should be less
    - If it's the second element, the length - 2 should be less than index - 1

  - Since the array is sorted in a way where numbers are sequential it is possible to do this in O(logN);

Questions:
  - Will we always be given an array of Numbers, or is it possible to receive a string representation of a number
  - 

Examples:
[1, 3, 2, 1, 4, 5]
 0  1  2  3  4  5
  => 0 or 5


*/


function findPeakInTerrain(terrain) {
  let left = 0;
  let right = terrain.length - 1;
  let tallest = 0;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (terrain[mid] > terrain[tallest]) {
      left = mid + 1;
      tallest = mid;
    }
    else {
      right = mid - 1;
    }

  }

  return tallest;
}

console.log(findPeakInTerrain([1, 2, 1]) === 1);
console.log(findPeakInTerrain([1, 3, 4, 1]) === 2);
console.log(findPeakInTerrain([3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3]) === 2);
console.log([1, 4].includes(findPeakInTerrain([1, 3, 2, 1, 5, 4])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 7, 3]) === 5);
console.log(findPeakInTerrain([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log([0, 8].includes(findPeakInTerrain([5, 4, 3, 2, 1, 2, 3, 4, 5])));
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 4, 3, 2, 1]) === 4);
console.log(findPeakInTerrain([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) === 0);
console.log(findPeakInTerrain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 9);

// All test cases should log true