function isSquareInteger(num) {
  // let nums = new Array(num);
  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === num) {
      return true;
    }
    else if (mid * mid > num) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }
  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.