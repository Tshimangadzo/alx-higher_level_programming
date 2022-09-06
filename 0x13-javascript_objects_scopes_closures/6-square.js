#!/usr/bin/node

const Square_ = require('./5-square');

class Square extends Square_ {
  charPrint (c = 'X') {
    for (let i = 0; i < this.height; i++) {
      let str = '';

      for (let j = 0; j < this.width; j++) {
        str += c;
      }
      console.log(str);
    }
  }
}

module.exports = Square;
