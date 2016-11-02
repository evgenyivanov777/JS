"use strict"; 

function countBs(str) { 
        return str.length 
} 

countBs('Пример') 

//функция считает, сколько раз встречается символ в данной строке 
function countChar(str, symbol) { 
        var len = str.length, buf = i = 0; 
        for (; i < len; i++) { 
                if (str.charAt(i) == symbol) buf++; 
        } 
        return buf; 
} 

countChar('Good afternoon everybody', 'o'); 