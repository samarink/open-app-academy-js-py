const { expect } = require('chai');

const DoublyLinkedList = require('../doubly-linked-list.js');

describe('Doubly Linked list', () => {

  let doublyLinkedList;

  beforeEach(function () {

    doublyLinkedList = new DoublyLinkedList();

  });

  it('has head, tail and length properties', () => {

    expect(doublyLinkedList.length).to.equal(0);
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);

  });

  it('can addToHead', function () {

    doublyLinkedList.addToHead(1);
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(3);

    expect(doublyLinkedList.length).to.equal(3);

    expect(doublyLinkedList.head.value).to.equal(3);
    expect(doublyLinkedList.head.next.value).to.equal(2);
    expect(doublyLinkedList.head.next.next.value).to.equal(1);

    expect(doublyLinkedList.tail.value).to.equal(1);
    expect(doublyLinkedList.tail.prev.value).to.equal(2);
    expect(doublyLinkedList.tail.prev.prev.value).to.equal(3);
  });

  it('can addToTail', function () {

    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);

    expect(doublyLinkedList.length).to.equal(3);

    expect(doublyLinkedList.head.value).to.equal(1);
    expect(doublyLinkedList.head.next.value).to.equal(2);
    expect(doublyLinkedList.head.next.next.value).to.equal(3);

    expect(doublyLinkedList.tail.value).to.equal(3);
    expect(doublyLinkedList.tail.prev.value).to.equal(2);
    expect(doublyLinkedList.tail.prev.prev.value).to.equal(1);
  });

});

