#!/usr/bin/node

function converter(base) {
  return function (acid) {
    return acid.toString(base);
  };
}

module.exports = { converter };
