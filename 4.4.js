let arr = ["Gilles", "Jamie", "Jason", "Leo", "Martin", "Ozcan", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sébastien", "Tanguy", "Thibaud", "Zakaria"];

function pickLearner(inputAR, n) {

    if(n > inputAR.length) {

    return inputAR
}
    let arr2 = [];
    let copy = [...inputAR];
     
    for (let i = 0; i < n; i++) {

        let chooseOne = Math.floor(Math.random() * (copy.length -1));

        arr2.push(copy[chooseOne]);

        copy.splice(chooseOne, 1);
        
    }

    return arr2;
}



console.log(pickLearner(arr ,14))

