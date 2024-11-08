// Array Example in TypeScript
let arr: number[] = [1, 2, 3, 4, 5];

// Access: O(1)
console.log(arr[2]); // Output: 3

// Insertion: O(n) if resizing or shifting is required
arr.splice(2, 0, 6); // Inserts 6 at index 2
console.log(arr); // Output: [1, 2, 6, 3, 4, 5]

// Deletion: O(n) if shifting is required
arr.splice(2, 1); // Removes element at index 2
console.log(arr); // Output: [1, 2, 3, 4, 5]
