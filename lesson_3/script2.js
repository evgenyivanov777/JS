"use strict";
var i, r, str8x8 = '';
for (r = 0; r < 4; ++r) {
  for (i = 0; i < 4; ++i) str8x8 += '# ';
  str8x8 += '\n'
  for (i = 0; i < 4; ++i) str8x8 += ' #';
  str8x8 += '\n'
}
console.log(str8x8);
