"use strict"; 

console.log(min(0, 10)); 
console.log(min(0, -10)); 

function min(a, b) { 
        var minimum; 
        minimum = (a <= b) ? a : b; 
        return minimum; 
}