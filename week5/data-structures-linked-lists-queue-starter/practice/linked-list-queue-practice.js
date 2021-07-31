// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);

    this.length++;

    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  listLength() {
    // Returns the length of the list
    // Implement in O(n) and in O(1) time complexity

    // O(1) time complexity
    // return this.length;

    // O(n) time complexity
    let length = 0;
    let current = this.head;

    while (current) {
      current = current.next;
      length++;
    }

    return length;
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // Write your hypothesis on the time complexity of this method here

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.value;
      current = current.next;
    }

    return sum;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // Write your hypothesis on the time complexity of this method here

    return this.sumOfNodes() / this.listLength();
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // Write your hypothesis on the time complexity of this method here

    let i = 0;
    let current = this.head;

    while (true) {
      if (i === n) return current;
      current = current.next;
      i++;
    }
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here

    let midIndex = Math.floor((this.listLength() - 1) / 2);

    return this.findNthNode(midIndex);
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here

    let ll = new SinglyLinkedList();
    let current = this.head;

    while (current) {
      ll.addToHead(current.value);
      current = current.next;
    }

    return ll;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;

      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  listLength() {
    let length = 0;
    let current = this.head;

    while (current) {
      current = current.next;
      length++;
    }

    return length;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here
    let headNode = this.head;
    let tailNode = this.tail;

    if (this.listLength() % 2 === 0) {
      tailNode = tailNode.prev;
    }

    while (headNode !== tailNode) {
      headNode = headNode.next;
      tailNode = tailNode.prev;
    }

    return headNode.value;
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
  }

  reverseInPlace() {
    let temp = null;
    let current = this.head;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
