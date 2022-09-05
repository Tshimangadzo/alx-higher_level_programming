#!/usr/bin/node

const argsNumber = parseInt(process.argv[2], 10);

function factorial (number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

if (!argsNumber) {
  console.log(1);
} else {
  console.log(factorial(argsNumber));
}
