const sha256 = require('js-sha256');

// Do not change this
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    let shaValue = sha256(key);

    return parseInt(shaValue.slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    const index = this.hashMod(key);
    const kv = new KeyValuePair(key, value);

    this.count++;

    kv.next = this.data[index];
    this.data[index] = kv;
  }
}

module.exports = HashTable;
