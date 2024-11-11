// Create a new Map instance
let myMap = new Map<string, number>();

// Add some key-value pairs to the map
myMap.set("apple", 5);
myMap.set("banana", 3);
myMap.set("orange", 2);

// Get the value of a key
console.log(myMap.get("apple"));  // Output: 5

// Check if a key exists in the map
console.log(myMap.has("banana"));  // Output: true

// Delete a key-value pair
myMap.delete("orange");

// Get the size of the map (number of key-value pairs)
console.log(myMap.size);  // Output: 2

// Iterate over the map entries
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// apple: 5
// banana: 3
