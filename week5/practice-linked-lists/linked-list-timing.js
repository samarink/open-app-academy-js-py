const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

// Construct a timing test to verify the time complexities of
// `addToHead` and `addToTail` for both single and doubly
// linked lists
const N = 100_000;

let startTime, endTime, ll;

startTime = new Date();
ll = new LinkedList();
for (let i = 0; i < N; i++) {
  ll.addToHead(i);
}
endTime = new Date();

console.log(`LinkedList#addToHead time: ${endTime - startTime}ms`);

startTime = new Date();
ll = new LinkedList();
for (let i = 0; i < N; i++) {
  ll.addToTail(i);
}
endTime = new Date();

console.log(`LinkedList#addToTail time: ${endTime - startTime}ms`);

startTime = new Date();
ll = new DoublyLinkedList();
for (let i = 0; i < N; i++) {
  ll.addToHead(i);
}
endTime = new Date();

console.log(`DoublyLinkedList#addToHead time: ${endTime - startTime}ms`);

startTime = new Date();
ll = new DoublyLinkedList();
for (let i = 0; i < N; i++) {
  ll.addToTail(i);
}
endTime = new Date();

console.log(`DoublyLinkedList#addToTail time: ${endTime - startTime}ms`);
