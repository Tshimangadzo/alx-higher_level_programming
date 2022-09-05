#!/usr/bin/node

const argsNumber = process.argv;

argsNumber.splice(0, 2);
if (argsNumber.length === 0 || argsNumber.length === 1) {
  console.log(0);
} else {
  const maximum = getMaximum(argsNumber);
  removeByValue(maximum);
  console.log(getMaximum(argsNumber));
}

function getMaximum () {
  let maximum = argsNumber[0];
  for (let i = 0; i < argsNumber.length; i++) {
    if (parseInt(maximum) < parseInt(argsNumber[i])) {
      maximum = argsNumber[i];
    }
  }
  return maximum;
}

function removeByValue (maximum) {
  let index = argsNumber.indexOf(maximum);
  while (index !== -1) {
    argsNumber.splice(index, 1);
    index = argsNumber.indexOf(maximum);
  }
}
