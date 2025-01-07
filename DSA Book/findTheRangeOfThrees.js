// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

function findLeftMostIndex(arr) {
	let left = 0;
	let right = arr.length - 1;
	let leftMostIndex;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === 3) {
			leftMostIndex = mid;
			right = mid - 1;
		}
		else if (arr[mid] < 3) {
			left = mid + 1;
		}
		else {
			right = mid - 1;
		}
	}

	return leftMostIndex ? leftMostIndex : -1;
}

function findRightMostIndex(arr) {
	let left = 0;
	let right = arr.length - 1;
	let rightMostIndex;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		
		if (arr[mid] === 3) {
			rightMostIndex = mid;
			left = mid + 1;
		}
		else if (arr[mid] < 3) {
			left = mid + 1;
		}
		else {
			right = mid - 1;
		}
	}

	return rightMostIndex ? rightMostIndex : -1;
}

// findRightMostIndex(arr) {
// 	left = 0;
// 	right = arr.length - 1;
// }

console.log(findLeftMostIndex([1, 2, 3, 3, 3, 3, 3, 4, 5]));
console.log(findRightMostIndex([1, 2, 3, 3, 3, 3, 3, 4, 5]));