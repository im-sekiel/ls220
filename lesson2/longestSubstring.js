// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

// function longestSubstringLength(string) {
//   let uniques = {};
//   let longest = 0;

//   for (let index = 0; index < string.length; index += 1) {
//     let current = string[index];

//     if (uniques[current] !== undefined) {
//       longest = 0;
//       index = uniques[current];
//       uniques = {};
//     }
//     else {
//       uniques[current] = index;
//       longest += 1;
//     }
//   }

//   return longest;
// }

/*
string => helloword
index  => 012345678


This is similar to the solution given to us in the sense that I used the index to move the "anchor." However, my solution didn't utilize two pointers.
`uniques.get(current)` gets the index of the last duplicate and reassigns it to `index`. If we take `"helloworld"` as an example, when we're on index 3, the character `'l'`
exists within `uniques` with a value of `2`. So we reassign index to that previous value, and start iterating from that previous point.

To clarify and show another example:
When we reach index 6, `uniques` holds the values: { 'l' => 3, 'o' => 4, 'w' => 5 }. The `current` character value in this instance is `'o'`, and we trigger the `if` statement
because our `Map` object has the key `'o'`.  Within the `if` statement we retrieve the value for `'o'`
which is `4` and reassign it to index. We then reassign `uniques` to a new `Map` instance. This current iteration ends and we start anew with index assigned to value `5`, which is 
character `w`. From here on forward the `else` statement triggers because we don't come across another duplicate character.

Also, I adding my original solution, which did not include a `Map` object, but after reading the solution and seeing the solution of others, I figured using `Map` made it easier to read.



*/


function longestSubstringLength(string) {
  let uniques = new Map();

  for (let index = 0; index < string.length; index += 1) {
    let current = string[index];

    if (uniques.has(current)) {
      index = uniques.get(current);
      uniques = new Map();
    }
    else {
      uniques.set(current, index);
    }
  }

  return uniques.size;
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);