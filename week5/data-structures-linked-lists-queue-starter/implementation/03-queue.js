const { SinglyLinkedNode } = require('./01-singly-linked-list');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new SinglyLinkedNode(val);

    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this.length;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this.length;
  }

  dequeue() {
    this.length--;

    let value = null;

    if (this.head) {
      value = this.head.value;
      this.head = this.head.next;
    }

    if (this.head === null) this.tail = null;

    return value;
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
