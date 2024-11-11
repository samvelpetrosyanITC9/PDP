class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null = null;

  add(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  delete(value: T) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
}

// Example usage:
const list = new LinkedList<number>();
list.add(1);
list.add(2);
list.add(3);

console.log("Before deletion:");
let current = list.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

list.delete(2);

console.log("After deletion:");
current = list.head;
while (current) {
  console.log(current.value);
  current = current.next;
}
