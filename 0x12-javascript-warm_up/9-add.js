#!/usr/bin/node

const firstValue = parseInt(process.argv[2], 10);
const secondValue = parseInt(process.argv[3], 10);

function add(a, b) {
  return a + b;
}

if (firstValue && secondValue) {
  console.log(add(firstValue, secondValue));
} else {
  console.log(NaN);
}
