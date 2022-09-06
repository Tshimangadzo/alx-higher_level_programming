#!/usr/bin/node

const dic = require("./101-data").dict;

const newDic = {};

for (key in dic) {
  if (!newDic[dic[key]]) {
    newDic[dic[key]] = [];
  }
  newDic[dic[key]].push(key);
}

console.log(newDic)