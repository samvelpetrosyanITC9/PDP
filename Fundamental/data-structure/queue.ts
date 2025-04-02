class Queue<T> {
    private items: T[] = [];

    enqueue(element: T): void {
        this.items.push(element); // Add to the end
    }

    dequeue(): T | undefined {
        return this.items.shift(); // Remove from the front
    }

    front(): T | undefined {
        return this.items[0]; // Get front element
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.
            length;
    }
}

// Usage Example
const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10
