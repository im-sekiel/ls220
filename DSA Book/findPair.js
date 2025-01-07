// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

// Test Cases:
/*
Input: Array of numbers
Return: null or pair

Rules:
	- If no pair exists return null
	- It is gauranteed that there is either exactly one pair of numbers that satisfied condition or no pairs at all
		- We can return after finding the pair

-- Algorithm --
Iterate through the numbers
	For each number do: 10 - num
		- Check if the result of 10 - num is included in the array
			-if the result does exists, return [currentNum, result]

	- return null

*/

function findPair(numbers) {
	for (let index1 = 0; index1 < numbers.length - 1; index1 += 1) {
		let current = numbers[index1];
		for (let index2 = index1 + 1; index2 < numbers.length; index2 += 1) {
			let next = numbers[index2];
			if (current + next === 10) return [current, next];
		}
	}

	return null;
}



console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]