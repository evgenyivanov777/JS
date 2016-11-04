"use strict";

function dectohex(a,b,c) {
  return '#' + a.toString(16) + b.toString(16) + c.toString(16);
}

console.log(dectohex(255,100,15));
console.log(dectohex(15,15,15));
console.log(dectohex(125,237,99));
