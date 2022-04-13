


function pickLearner(inputAR, n) {

    inputAR = ["Gilles", "Jamie", "Jason", "Leo", "Martin", "Ozcan", "Rayane", "Rayhan", "Ricardo", "Steffanie", "Sébastien", "Tanguy", "Thibaud", "Zakaria"];
    
    n = 0;

    if (n > 0 && n < inputAR.length) {

    return Math.round(Math.random() * inputAR.length);

    }  
    console.log(inputAR[n]);
}