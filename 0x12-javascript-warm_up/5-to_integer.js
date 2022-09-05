#!/usr/bin/node
const args = process.argv;
const convertNumber = parseInt(args[2],10)
console.log(convertNumber?`My number: ${convertNumber}`:'Not a number')