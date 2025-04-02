class CustomMap<K, V> {
    private buckets: { key: K; value: V }[][];  // Array of buckets for handling collisions
    private capacity: number;
    private size: number;

    constructor(capacity: number = 16) {
        this.capacity = capacity;
        this.size = 0;
        this.buckets = new Array(capacity).fill(null).map(() => []);
    }

    // Hash function to convert key into index
    private hash(key: K): number {
        const strKey = JSON.stringify(key);
        let hash = 0;
        for (let i = 0; i < strKey.length; i++) {
            hash = (hash * 31 + strKey.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }

    // Set (Insert or Update)
    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair.key === key) {
                pair.value = value;  // Update existing key
                return;
            }
        }

        bucket.push({ key, value });  // Add new key-value pair
        this.size++;
    }

    // Get (Retrieve Value)
    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return undefined;
    }

    // Check if key exists
    has(key: K): boolean {
        return this.get(key) !== undefined;
    }

    // Delete key-value pair
    delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    // Get size of map
    getSize(): number {
        return this.size;
    }

    // Iterate over map
    forEach(callback: (value: V, key: K) => void): void {
        for (let bucket of this.buckets) {
            for (let pair of bucket) {
                callback(pair.value, pair.key);
            }
        }
    }
}

const myMap = new CustomMap<string, number>();

// Add key-value pairs
myMap.set("apple", 5);
myMap.set("banana", 3);
myMap.set("orange", 2);

// Retrieve values
console.log(myMap.get("apple"));  // Output: 5

// Check key existence
console.log(myMap.has("banana"));  // Output: true

// Delete a key
myMap.delete("orange");

// Get size
console.log(myMap.getSize());  // Output: 2

// Iterate over key-value pairs
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// apple: 5
// banana: 3

