// Node class is implemented for you, no need to look for bugs here!
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
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedNode(val);

    if (this.length > 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    const newNode = new DoublyLinkedNode(val);

    this.length++;

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  removeFromHead() {
    if (!this.head) return undefined;

    this.length--;

    const removedNode = this.head;

    if (!this.head.next) {
      this.head = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
    }

    return removedNode.value;
  }

  removeFromTail() {
    if (!this.head) return undefined;

    this.length--;

    const removedNode = this.tail;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;

      removedNode.prev = null;
    }

    return removedNode.value;
  }

  peekAtHead() {
    return this.head ? this.head.value : undefined;
  }

  peekAtTail() {
    if (!this.tail) return undefined;

    return this.tail.value;
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
