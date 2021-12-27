// Array Methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// map
function doubledNumber(n){
    return n * 2;
}

function squaredNumber(n){
    return n ** 2;
}

function negativeNumber(n){
    return n * -1;
}
const doubledNumbers = numbers.map(doubledNumber);
const squaredNumbers = numbers.map(squaredNumber);
const negativeNumbers = numbers.map(negativeNumber);

//returns an new array of numbers doubled 
console.log(doubledNumbers);
console.log(squaredNumbers);
console.log(negativeNumbers);


// array of numbers with only even numbers 
function getEven(n){
    return n % 2 === 0;
}

const evenNumbers = numbers.filter(getEven);
console.log(evenNumbers);

// every method 
// determine (true or false) if all numbers in arrary are greater than 0

function allNumsGreaterThanZero(n){
    return n > 0;
    // returns a boolean value
}
let myNumbers = [1, 2, 3 , 5, 10, 1, 10 ,-20];

console.log(myNumbers.every(allNumsGreaterThanZero));


/// practicing array methods on Rick and Morty API 

// create async function to get data
// fetch data and assign to variable response 
// parse data into json 


async function getRickAndMorty(){
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(data);
}

getRickAndMorty();