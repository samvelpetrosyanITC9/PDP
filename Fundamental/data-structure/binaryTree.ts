class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  // Insert a new node into the BST
  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  // Search for a value in the BST
  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (!node) return false;
    if (value < node.value) return this.searchNode(node.left, value);
    if (value > node.value) return this.searchNode(node.right, value);
    return true;
  }

  // Find the minimum value in the BST
  findMin(): T | null {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) current = current.left;
    return current.value;
  }

  // Find the maximum value in the BST
  findMax(): T | null {
    if (!this.root) return null;
    let current = this.root;
    while (current.right) current = current.right;
    return current.value;
  }

  // Delete a node from the BST
  delete(value: T): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // Case 1: No child
      if (!node.left && !node.right) return null;

      // Case 2: One child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Case 3: Two children - find the in-order successor
      const minValue = this.findMinValue(node.right);
      node.value = minValue;
      node.right = this.deleteNode(node.right, minValue);
    }
    return node;
  }

  private findMinValue(node: TreeNode<T>): T {
    while (node.left) node = node.left;
    return node.value;
  }

  // In-Order Traversal (Left -> Root -> Right)
  inOrderTraversal(node: TreeNode<T> | null = this.root): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}

// Usage Example
const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(18);

console.log("Search 7:", bst.search(7)); // Output: true
console.log("Search 20:", bst.search(20)); // Output: false

console.log("Min:", bst.findMin()); // Output: 3
console.log("Max:", bst.findMax()); // Output: 18

console.log("In-Order Traversal:");
bst.inOrderTraversal(); // Output: 3, 5, 7, 10, 13, 15, 18

bst.delete(7);
console.log("After deleting 7:");
bst.inOrderTraversal(); // Output: 3, 5, 10, 13, 15, 18
