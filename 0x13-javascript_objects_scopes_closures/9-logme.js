#!/usr/bin/node

let i = 0;
function logMe (str) {
  console.log(`${i}: ${str}`);
  i++;
}
module.exports = { logMe };
