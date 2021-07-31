// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);

    this.length++;

    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    this.length++;

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;

    return this;
  }

  removeFromHead() {
    // Remove node at head
    // Write your hypothesis on the time complexity of this method here
    if (this.head) {
      const removedNode = this.head;

      this.length--;

      this.head = this.head.next;

      return removedNode;
    }
  }

  removeFromTail() {
    if (!this.head) return;

    this.length--;

    if (!this.head.next) {
      this.head = null;
    } else {
      let current = this.head;

      while (current.next.next) {
        current = current.next;
      }

      const removedNode = current.next;
      current.next = null;

      return removedNode;
    }
  }

  peekAtHead() {
    return this.head ? this.head.value : undefined;
  }

  print() {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
