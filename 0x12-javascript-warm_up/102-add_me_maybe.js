#!/usr/bin/node
function addMeMaybe (value, callBack) {
  if (callBack) {
    callBack(value + 1);
  }
}

module.exports = { addMeMaybe };
