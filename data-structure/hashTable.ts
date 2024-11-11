class HashTable<K, V> {
    private table: Array<Array<[K, V]>>;

    constructor(size: number) {
        this.table = new Array(size);
    }

    // Simple hash function that returns an index for the given key
    private hash(key: K): number {
        let hash = 0;
        const keyString = String(key); // Ensure key is a string
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash << 5) - hash + keyString.charCodeAt(i);
        }
        return Math.abs(hash) % this.table.length;
    }

    // Add key-value pair to the table
    set(key: K, value: V): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Update value if key already exists
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }

    // Get the value associated with the key
    get(key: K): V | undefined {
        const index = this.hash(key);
        if (!this.table[index]) return undefined;
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    }

    // Remove a key-value pair from the table
    delete(key: K): boolean {
        const index = this.hash(key);
        if (!this.table[index]) return false;
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                return true;
            }
        }
        return false;
    }
}

// Example usage:
const myHashTable = new HashTable<string, number>(50);
myHashTable.set("name", 123);
myHashTable.set("age", 30);
console.log(myHashTable.get("name"));  // Output: 123
console.log(myHashTable.get("age"));   // Output: 30
myHashTable.delete("age");
console.log(myHashTable.get("age"));   // Output: undefined
