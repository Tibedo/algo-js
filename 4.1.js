function calcSurface (l, w) {
    return l * w; 
}

let lenght = prompt("Enter a lenght to make a rectangle");
let width = prompt("Enter a width to make a rectangle");

l = lenght;
w = width;

alert("the surface is" + " " + calcSurface(l, w))
