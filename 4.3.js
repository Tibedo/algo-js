
// NOT FINISH //

function rand10(a, b) {
    a = 1;
    b = 10;
    return Math.floor(Math.random() * (b - a)) + a;     
 }
 
 

 
 function multiRand(n) {

    let arr = []

    for (let i = 0; i < n; i++) {
        
        arr.push(rand10())
    }

return arr;
 
}

let ask = prompt("How much numbers would you like to display ?");


console.log(multiRand(ask))
