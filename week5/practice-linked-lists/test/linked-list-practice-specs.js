const { expect } = require('chai');

const LinkedList = require('../linked-list.js');

describe('Linked list', () => {

  let linkedList;

  beforeEach(function () {

    linkedList = new LinkedList();

  });

  it('has head and length properties', () => {

    expect(linkedList.length).to.equal(0);
    expect(linkedList.head).to.equal(null);

  });

  it('does not have a tail pointer', () => {

    expect(linkedList.tail).to.equal(undefined);

  });


  it('can addToHead', function () {

    linkedList.addToHead(1);
    linkedList.addToHead(2);
    linkedList.addToHead(3);

    expect(linkedList.length).to.equal(3);

    expect(linkedList.head.value).to.equal(3);
    expect(linkedList.head.next.value).to.equal(2);
    expect(linkedList.head.next.next.value).to.equal(1);
  });

  it('can addToTail', function () {

    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);

    expect(linkedList.length).to.equal(3);

    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.head.next.value).to.equal(2);
    expect(linkedList.head.next.next.value).to.equal(3);
  });

});

