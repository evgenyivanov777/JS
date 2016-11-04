"use strict";

function dectoObj(a) {
  var obj = {};
  if (a >= 0 && a < 999) {
    a = a.toString(10);
    return obj = {единицы: +a[0] || 0, десятки: +a[1] || 0, сотни: +a[2] || 0};
  }
  else {
    console.log("Число превышает '999'");
    return obj;
  }
}

console.log(dectoObj(379));
console.log(dectoObj(15));
console.log(dectoObj(1000));
