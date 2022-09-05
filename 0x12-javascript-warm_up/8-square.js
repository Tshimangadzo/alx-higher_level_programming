#!/usr/bin/node

const argsNumber = parseInt(process.argv[2], 10);

if (!argsNumber) {
  console.log('Missing size');
}

for (let row = 0; row < argsNumber; row++) {
  let rowsData = '';
  for (let cols = 0; cols < argsNumber; cols++) {
    rowsData += 'X';
  }
  console.log(rowsData);
}
