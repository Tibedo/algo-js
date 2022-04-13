let i = prompt("Enter your favorite number");

while (i >= 0 && i != 42) {
  i++;
  alert("Are you sure ?");
  i = prompt("Enter your favorite number");
 
  if (i === 42) {   
    break;
  }
  
}
alert("Nice!");
