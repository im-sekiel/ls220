function assignTreats(appetite, treats) {
	appetite.sort();
	treats.sort();
	let aIndex = 0;
	let tIndex = 0;
	let count = 0;

	while (aIndex < appetite.length && tIndex < treats.length) {
		let pet = appetite[aIndex];
		let treat = treats[tIndex];

		if (treat >= pet) {
			count += 1;
			aIndex += 1;
		}
		tIndex += 1;
	}
	return count;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.