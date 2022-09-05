#!/usr/bin/node

function callMeMoby(value, callBack) {
  if (callBack) {
    for (let i = 0; i < value; i++) {
      callBack();
    }
  }
}

module.exports = { callMeMoby };
