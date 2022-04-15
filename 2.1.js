
let number = prompt ("Enter your age");

function adult(age) {

    if ( age >=18 && age < 50 ) {
        alert("You are an adult");
    }
     else if (age > 50 && age < 100) {
        alert("You so old");
        }

    else if (age > 0 && age < 18) {
        alert("You are not yet an adult");
    }

    else if (age <= 0) {
        alert("Your not alive");
    }
    else if (age > 99 ) {
        alert("You're die bro");
    }
    else {
        alert("What the fuck?");
    }
 
}

adult(number);

