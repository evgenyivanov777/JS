function isEven(a){
       a = Math.abs(a)
       if (a === 0){
           return true
       }
       else if(a === 1){
           return false
       }
       else {
           isEven(a-2);
console.log(a);
}
   }
function isEven2(x) {
   var rez;

   if (Math.abs(x) == 0 ) rez = true
    else if (Math.abs(x) == 1) rez = false
    else {
       isEven2(x-2);
       console.log(x);
}
if (rez != undefined) console.log(rez);
}

undefined
isEven(10);
VM181:11 2
VM181:11 4
VM181:11 6
VM181:11 8
VM181:11 10
undefined
isEven2(10);
VM185:10 true
VM185:8 2
VM185:8 4
VM185:8 6
VM185:8 8
VM185:8 10
undefined