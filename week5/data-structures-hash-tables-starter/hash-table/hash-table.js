//const sha256 = require('js-sha256');

// Use these to store the key/value pairs in your hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), delete O(1)

  constructor(numBuckets = 2) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }

  read(key) {
    let current = this.data[this.hashMod(key)];

    while (current) {
      if (current.key === key) return current.value;
      current = current.next;
    }

    return undefined;
  }

  insert(key, value) {
    if (this.count / this.capacity >= 0.7) {
      this.resize();
    }

    const index = this.hashMod(key);
    const kv = new KeyValuePair(key, value);

    kv.next = this.data[index];
    this.data[index] = kv;

    this.count++;
  }

  resize() {
    const oldData = this.data;
    this.count = 0;
    this.capacity *= 2;
    this.data = new Array(this.capacity).fill(null);

    for (let node of oldData) {
      while (node) {
        this.insert(node.key, node.value);
        node = node.next;
      }
    }
  }

  delete(key) {
    const index = this.hashMod(key);
    let node = this.data[index];
    let prev = null;

    this.count--;

    if (node.key === key) {
      this.data[index] = node.next;
    } else {
      while (node && node.key !== key) {
        prev = node;
        node = node.next;
      }

      prev.next = node.next;
    }
  }
}

module.exports = HashTable;
