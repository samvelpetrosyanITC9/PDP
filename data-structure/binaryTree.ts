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

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (!node) return false;
    if (value < node.value) return this.searchNode(node.left, value);
    if (value > node.value) return this.searchNode(node.right, value);
    return true;
  }
}

const bst = new BinarySearchTree<number>();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

console.log(bst.search(3)); // Output: true
console.log(bst.search(12)); // Output: false
