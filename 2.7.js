let n = prompt("Enter a number");
let a = prompt("Enter a new number" + " " + n + " " + "times");
let sum = 0

while(a<n) {
    a++;
    a = prompt("Enter a new number" + " " + n + " " + "times");   
    sum+a
}

alert(sum)