
function askTvSerie() {
  
    let serie = {
    one : name,
    two : year,
    three : members,
    }
  console.log("Your favorite serie is " + serie.one);
  console.log("It's product in " + serie.two);
  console.log("Names of cast members are " + serie.three);
  }

  let  name = prompt("What's the name of your favorite tv serie ?");
  let  year = prompt("En quelle année à elle été produite ?");
  let members = prompt("What's the name of the cast members ?");


function randomizeCast(tvSerie)