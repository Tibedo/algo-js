function calcDistance(a, b) {
     this.a = a;
     this.b = b;

     this.distanceTo = function(coordo) {

         let distance =  Math.sqrt((Math.pow(coordo.a-this.a,2))+(Math.pow(coordo.b-this.b,2)));

         return distance;    
     }
}

let dist1 = new calcDistance (5, 20);
let dist2 = new calcDistance (10, 40);

let dist3 = new calcDistance (1, 1);
let dist4 = new calcDistance (2, 2);

let dist5 = new calcDistance (4, 1);
let dist6 = new calcDistance (1, 1);

console.log(dist1.distanceTo(dist2))
console.log(dist3.distanceTo(dist4))
console.log(dist5.distanceTo(dist6))