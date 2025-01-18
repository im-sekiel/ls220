// Write a function named findTruckCapacity that determines
// the optimal capacity for a delivery truck to transport
// a series of orders within a given number of trips.

// The function takes two parameters:
// 1. An array of positive integers orderVolumes, where each
// element represents the volume of an order in cubic meters.
// 2. A positive integer maxTrips, representing the maximum
// number of trips the truck can make.

// The truck must deliver orders in the sequence they appear
// in the orderVolumes array. On each trip, the truck is
// loaded with as many consecutive orders as possible without
// exceeding its capacity. The function should return the
// minimum truck capacity in cubic meters.

// Example:
// Input: orderVolumes = [6, 3, 8, 2, 5, 4, 5], maxTrips = 3
// Output: 14
// Explanation: A truck with 14 cubic meters capacity can
//              deliver all orders in 3 trips:
// Trip 1: 6 + 3 = 9 cubic meters
// Trip 2: 8 + 2 = 10 cubic meters
// Trip 3: 5 + 4 + 5 = 14 cubic meters

function validCapacity(nums, counter, capacity) {
  let sum = 0;

  for (let index = 0; index < nums.length; index += 1) {
    let current = nums[index];
    sum += current;

    if (sum > capacity) {
      sum = 0;
      counter -= 1;
      index -= 1;
    }

    if (counter <= 0) return false;
  }

  return true;
}

function findTruckCapacity(orderVolumes, maxTrips) {
  let left = 1;
  let right = orderVolumes.reduce((acc, num) => acc+=num, 0);
  let min = Math.floor((left + right) / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (validCapacity(orderVolumes, maxTrips, mid)) {
      right = mid - 1;
      min = mid;
    }
    else {
      left = mid + 1;
    }
  }

  return min;
}

console.log(findTruckCapacity([6, 3, 8, 2, 5, 4, 7], 3) === 15);
console.log(findTruckCapacity([3, 2, 5, 8, 4], 3) === 10);
/*
left = 1, right = 22
Math.floor(1 + 22 / 2) = 11

left = 1, right = 10
Math.floor(1 + 10 / 2) == 5

left = 6, right = 10
Math.floor(6 + 10 / 2) == 8

left = 9, right = 10
Math.floor(9 + 10 / 2) == 9

left = 10, right = 10
Math.floor(10 + 10 / 2) == 10

*/
console.log(findTruckCapacity([1, 2, 3, 4, 5], 1) === 15);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 5) === 50);
console.log(findTruckCapacity([5, 5, 5, 5, 5], 2) === 15);
console.log(findTruckCapacity([7, 3, 9, 4, 2, 8, 6], 2) === 20);
console.log(findTruckCapacity([100], 1) === 100);
console.log(findTruckCapacity([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 3) === 4);
console.log(findTruckCapacity([10, 20, 30, 40, 50], 2) === 90);
console.log(findTruckCapacity([50, 40, 30, 20, 10], 3) === 60);
console.log(findTruckCapacity([5, 10, 15, 20, 25], 1) === 75);
console.log(findTruckCapacity([3, 2, 4, 1, 5], 10) === 5);
console.log(findTruckCapacity([1000, 1000, 1000, 1000], 3) === 2000);
console.log(findTruckCapacity([20, 1, 10, 8, 20], 3) === 20);
console.log(findTruckCapacity([21, 2, 2, 1, 4, 2, 1, 4, 3, 1, 20], 3) === 21);
/*
left = 1, right = 61
Math.floor(1 + 61 / 2) == 31
right = mid - 1;

left = 1, right = 30
Math.floor(1 + 30 / 2) == 15
left = mid + 1;

left = 16, right = 30;
Math.floor(16 + 30 / 2) == 23
right = mid - 1;

left = 16, right = 22;
Math.floor(16 + 22 / 2) == 19
left = mid + 1;

left = 20, right = 22;
Math.floor(20 + 22 / 2) == 21
right = mid - 1;

left = 20, right = 20;
Math.floor(20 + 20 / 2) == 20


*/