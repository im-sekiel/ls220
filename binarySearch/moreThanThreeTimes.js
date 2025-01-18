function searchLeft(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let leftestIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      right = mid - 1;
      leftestIndex = mid;
    }
    else if (nums[mid] > target) {
      right = mid - 1;
    }
    else {
      left = mid + 1;
    }
  }

  return leftestIndex;
}

function searchRight(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let rightestMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      left = mid + 1;
      rightestMost = mid;
    }
    else if (nums[mid] < target) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }

  return rightestMost;
}

function isTargetFrequent(nums, target) {
  let leftIndex = searchLeft(nums, target);
  let rightIndex = searchRight(nums, target);

  return rightIndex - leftIndex >= 3;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.