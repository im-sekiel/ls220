// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

// Test Cases:
function findMajority(arr) {
	let count = {};
	let majority = Math.ceil(arr.length / 2);

	for (let index = 0; index < arr.length; index += 1) {
		let num = arr[index];

		count[num] ||= 0;
		count[num] += 1;

		if (count[num] >= majority) return num;
	}
}


console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true

