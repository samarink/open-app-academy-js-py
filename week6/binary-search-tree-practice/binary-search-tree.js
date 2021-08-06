// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Fill this in
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Fill this in
    let newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;

    } else {

      if (val < currentNode.val) {

        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this.insert(val, currentNode.left);
        }

      } else {

        if (val > currentNode.val) {

          if (!currentNode.right) {
            currentNode.right = newNode;
          } else {
            this.insert(val, currentNode.right)
          }

        }

      }

    }

  }

  search(val, currentNode = this.root) {
    if (currentNode === null) return false;
    if (currentNode.val === val) return true;
    if (currentNode.val > val) return this.search(val, currentNode.left);
    if (currentNode.val < val) return this.search(val, currentNode.right);
  }

  preOrderTraversal(currentNode=this.root) {
    // Fill this in
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode=this.root) {
    // Fill this in
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);

  }

  postOrderTraversal(currentNode=this.root) {
    // Fill this in
    if (!currentNode) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }
}

module.exports = BinarySearchTree;

