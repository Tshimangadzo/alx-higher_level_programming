#!/usr/bin/node

const argNumber = parseInt(process.argv[2], 10);
if (!argNumber) {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < argNumber; i++) {
  console.log('C is fun');
}
