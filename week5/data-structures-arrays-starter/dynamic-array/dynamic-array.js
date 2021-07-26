class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.resize();

    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    const element = this.data[this.length - 1];
    this.length--;

    return element;
  }

  unshift(val) {
    this.resize();

    if (this.length > 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
    }

    this.data[0] = val;
    this.length++;
  }

  shift() {
    const element = this.data[0];

    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    this.length--;

    return element;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {
    if (this.length === this.capacity) {
      this.capacity *= 2;

      const newData = new Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        newData[i] = this.data[i];
      }

      this.data = newData;
    }
  }
}

module.exports = DynamicArray;
