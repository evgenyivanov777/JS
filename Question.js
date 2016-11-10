//вроде код эквивалентный, но результат разный, не объясните, почему так?
//вариант 1
var list = {};
list = {value:2, rest: list};

//вариант 2
var list = {};
list.value = 2; list.rest = list;
