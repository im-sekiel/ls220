function reverseWords(string) {
	let words = string.split(' ');
	let returnStr = '';

	word = words.map(word => {
		let start = 0;
		let end = word.length - 1;
		word = word.split('');

		while (start <= end) {
			[word[start], word[end]] = [word[end], word[start]];
			start += 1;
			end -= 1;
		}

		return word.join('');
	});

	return word.join(' ');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");