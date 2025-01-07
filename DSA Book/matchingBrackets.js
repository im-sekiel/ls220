// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

function areMatched(string) {
  let stack = [];
  let matches = { '(':')', '[':']', '{':'}' };

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];

    if (matches[char]) {
      stack.push(char);
    }
    else {
      let top = stack.pop();
      if (!(matches[top] === char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false