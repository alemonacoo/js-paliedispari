console.log("JS OK!");

// ESERCIZIO 1
let word = prompt("Inserire una parola!");
console.log(isPalindrome(word));


// Funzione isPalindrome per verificare se una parola è palindroma o meno
function isPalindrome(word){
    let lettersArray = [];
    let lettersArrayReversed = [];
    lettersArray = word.split("");
    lettersArrayReversed = word.split("").reverse(); 
    console.log(lettersArray);
    console.log(lettersArrayReversed);
    return lettersArray.toString() === lettersArrayReversed.toString() ? true : false;
}




// let min = 1  // parseInt(prompt("Inserire numero minimo"));
// let max = 5  // parseInt(prompt("Inserire numero massimo"));
// console.log(getRandomInteger(min, max));


// //Funzione getRandomInteger 
// function getRandomInteger(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min); 
// }



