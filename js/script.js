console.log("JS OK!");

// ESERCIZIO 1:
//
let word;
while(word == null || !isNaN(word)){
    word = prompt("Inserire una parola!");
} 
console.log("User's Word: " + word)

if(isPalindrome(word)){
    console.log(`La parola inserita "${word}" è palindroma!`);
} else{
    console.log(`La parola inserita NON è palindroma!`);
}



// Funzione isPalindrome per verificare se una parola è palindroma o meno
function isPalindrome(phrase){
    let lettersArray = [];
    let lettersArrayReversed = [];
    lettersArray = phrase.split('');
    lettersArrayReversed = phrase.split('').reverse(); 
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
}

let sum = userNumber + computerNumber;

console.log('User Number: ' + userNumber);
console.log('Computer Number: ' + computerNumber);
console.log("User's choiche: " + oddEvenChoice);
console.log("Sum: " + sum);

//Results:
if(oddEvenChoice === isOddEven(sum)){
    console.log("USER WINS!!")
} else{
    console.log("COMPUTER WINS!!")
}

// FUNCTIONS:
// Function isOddEven returns even or odd strings if number is even or odd
function isOddEven(number){
    return number % 2 === 0 ? 'even' : 'odd';
}


//Funcion getRandomInteger returns random integer between the specified values (inclusive)
function getRandomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min); 
}



