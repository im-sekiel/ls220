// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.
function findNeg(arr) {
	let left = 0;
	let right = arr.length - 1;
	let neg = -1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] <= 0) {
			neg = mid;
			left = mid + 1;
		}
		else {
			right = mid - 1;
		}
	}

	return neg;
}

function findPos(arr) {
	let left = 0;
	let right = arr.length - 1;
	let pos = arr.length;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] <= 0) {
			left = mid + 1;
		}
		else {
			pos = mid;
			right = mid - 1;
		}
	}

	return pos;
}

function minimumCount(nums) {
  const firstPositiveIdx = findPos(nums);
  const lastNegativeIdx = findNeg(nums);

  const negativeCount = lastNegativeIdx + 1;
  const positiveCount = nums.length - firstPositiveIdx;
  return Math.min(negativeCount, positiveCount);
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

console.log(minimumCount([-3, -2, -1, 0, 0, 0, 5, 6]) === 2);

// All test cases should log true.