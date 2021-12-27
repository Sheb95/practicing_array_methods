// Array Methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// map
function doubledNumber(n){
    return n * 2;
}

const doubledNumbers = numbers.map(doubledNumber);

//returns an new array of numbers doubled 
console.log(doubledNumbers);


// array of numbers with only even numbers 
function getEven(n){
    return n === 0;
}

const evenNumbers = numbers.filter(getEven);