// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

function minimumCount(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 0) {
      // console.log(left, mid, right);
      // console.log(Math.min((mid - left), (right - mid)))
      return Math.min((mid), (nums.length - mid - 1));
    }
    else if (nums[mid] > 0) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }

  // console.log(left, right);
  if (left === 0 || nums.length === left) return 0;
  return Math.min(left, (nums.length - left));
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);
console.log(minimumCount([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]) === 5);

// All test cases should log true.