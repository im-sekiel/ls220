// Write a function `reverseSegment` that reverses a segment
// of a singly linked list between two given positions,
// `start` and `end`. The function should take the head of
// the linked list and two integers, `start` and `end`, as
// input and return the modified list.

// The positions `start` and `end` are 1-indexed, and `start`
// is guaranteed to be less than or equal to `end`.

// The list is guaranteed to have at least one node, and `start`
// and `end` are guaranteed to be within the bounds of the list.

// Example:
// Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
// Output: [1, 7, 5, 3, 9]
// Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
//              is reversed to (7 -> 5 -> 3).

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

// function reverseSegment(head, start, end) {
//   let dummy = new ListNode(null);
//   dummy.next = head;
//   let prev = dummy;
//   let current = head;
//   let index = 1;
//   let nodes = [];

//   while (current) {
//     // If the current index is equal to start, we know we're at the beginning of what we need to reverse
//     if (index === start) {
//       // We add current into an Array holder and increment current node until index goes past the end index;
//       while (index <= end) {
//         nodes.push(current);
//         current = current.next;
//         index += 1;
//       }

//       // We initialize a pointer to point to the beginning of the reverse head;
//       let reverse = nodes.pop();
//       let reverseHead = reverse;

//       // We iterate through the Array holder and reassign the 'reverse' `next` property to the next node;
//       while (nodes.length > 0) {
//         let next = nodes.pop();
//         reverse.next = next;
//         reverse = next;
//       }
      
//       // Finally. once we have the reversed segment, we reassign our `prev` pointer to the head of the reverse linked list
//       // and we reassign the last reverse linked list node to the `current` (the rest of the original linked list);
//       prev.next = reverseHead;
//       reverse.next = current;
//       break;
//     }
//     else {
//       prev = current;
//       current = current.next;
//       index += 1;
//     }
//   }

//   return dummy.next;
// }

function reverseSegment(head, start, end) {
  let dummy = new ListNode(null);
  let prev = dummy;
  let curr = head;
  dummy.next = head;
  let index = 1;

  while (curr) {
    if (index === start) {
      let reversePrev = null;
      let reverse = curr;

      while (index <= end) {
        let nextNode = reverse.next;
        reverse.next = reversePrev;
        reversePrev = reverse;
        reverse = nextNode;
        index += 1;
      }

      prev.next = reversePrev;
      console.log(curr);

      console.log(reversePrev, 'sadas');
      break;

    }
    else {
      index += 1;
      prev = curr;
      curr = curr.next;
    }
  }

  return dummy.next;
}

let list1 = createLinkedList([1, 3, 5, 7, 9]);
// reverse.next = null    reverse.next = 3
// reversePrev = 3        reversePrev = 5
// reverse = 5            reverse = 7
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null