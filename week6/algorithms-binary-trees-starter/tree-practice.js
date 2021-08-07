// Practice problems on binary trees

function findMinBST(rootNode) {
  // Fill this in

  while (rootNode.left) {
    rootNode = rootNode.left;
  }

  return rootNode.val;
}

function findMaxBST(rootNode) {
  // Fill this in

  while (rootNode.right) {
    rootNode = rootNode.right;
  }

  return rootNode.val;
}

function findMinBT(rootNode) {
  // Fill this in
  findMaxBST(rootNode);
}

function findMaxBT(rootNode) {
  // Fill this in
}

function getHeight(rootNode) {
  // Fill this in

  if (!rootNode) return -1;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function countNodes(rootNode) {
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function balancedTree(rootNode) {
  if (!rootNode) return true;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    balancedTree(rootNode.left) &&
    balancedTree(rootNode.right)
  );
}

function getParentNode(rootNode, target) {
  // Fill this in
}

function inOrderPredecessor(rootNode, target) {
  // Fill this in
}

function deleteNodeBST(rootNode, target) {
  // Fill this in
}

module.exports = [
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
];
