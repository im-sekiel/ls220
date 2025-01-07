// Given a string `str`, reverse all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

function reverseConsonants(string) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let strArr = string.split('');
	let start = 0;
	let end = string.length - 1;

	while (start < end) {
		let startLetter = strArr[start];
		let endLetter = strArr[end];

		while (vowels.includes(startLetter)) {
			start += 1;
			startLetter = strArr[start];
		}

		while (vowels.includes(endLetter)) {
			end -= 1;
			endLetter = strArr[end];
		}

		[strArr[start], strArr[end]] = [strArr[end], strArr[start]];
		start += 1;
		end -= 1;
	}

	return strArr.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true




