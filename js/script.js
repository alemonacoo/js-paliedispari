console.log("JS OK!");

// ESERCIZIO 1:
//
let word = prompt("Inserire una parola!");

if(isPalindrome(word)){
    console.log(`La parola inserita "${word}" è palindroma!`);
} else{
    console.log(`La parola inserita NON è palindroma!`);
}



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



//ESERCIZIO 2:
//

//Prompt 1 + Exceptions
let userNumber;
while (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
    userNumber = parseInt(prompt("Inserire un numero da 1 a 5"));
}

let computerNumber = getRandomInteger(1,5);

//Prompt 2 + Exceptions
let oddEvenChoice = ' ';
while(oddEvenChoice != 'even' && oddEvenChoice != 'odd'){
    oddEvenChoice = prompt("Scrivere 'even' per ricevere un numero pari random oppure 'odd' per un numero dispari random");
    console.log(oddEvenChoice);
}

let sum = userNumber + computerNumber;
console.log('User Number: ' + userNumber);
console.log('Computer Number: ' + computerNumber);
console.log("User's choiche: " + oddEvenChoice);


if(oddEvenChoice === isOddEven(sum)){
    console.log(sum);
    console.log("USER WINS!!")
} else{
    console.log(sum);
    console.log("COMPUTER WINS!!")
}


// Function isOddEven returns even or odd strings if number is even or odd
function isOddEven(number){
    return number % 2 === 0 ? 'even' : 'odd';
}


//Funcion getRandomInteger returns random integer between the specified values (inclusive)
function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); 
}



