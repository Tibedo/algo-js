function askTvSerie() {
    let  name = prompt("What's the name of your favorite tv serie ?");
    let  year = prompt("En quelle année à elle été produite ?");
    let members = prompt("What's the name of the cast members ?");
let tvSerie = {
    one : name,
    two : year,
    three : members,
    }
  console.log("Your favorite serie is " + tvSerie.one);
  console.log("It's product in " + tvSerie.two);
  console.log("Names of cast members are " + tvSerie.three);
  }



function randomizeCast(tvSerie) {

    askTvSerie();

    return Math.floor(Math.random() * tvSerie.length);

}

randomizeCast();