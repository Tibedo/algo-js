
function rand10(a, b) {
   a = 1;
   b = 10;
   return Math.floor(Math.random() * (b - a)) + a;     
}

console.log(rand10());