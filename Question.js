//вроде код эквивалентный, но результат разный, не объясните, почему так?
//вариант 1
var list = {};
list = {value:2, rest: list};

//вариант 2
var list = {};
list.value = 2; list.rest = list;

//и вот эта функия возвращает в итоге бесконечно вложенный друг в друга список,
//хотя присваивается переменная buf, а не сам список list
function arrayToList(a) {
  var i = a.length, list = {}, buf = null;
  for (; i > 0; i--) {
    list.value = i;
    list.rest = buf;
    buf = list;
  }
  return list;

arrayToList(arr);
