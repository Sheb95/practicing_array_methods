// // Array Methods

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



// // map
// function doubledNumber(n){
//     return n * 2;
// }

// function squaredNumber(n){
//     return n ** 2;
// }

// function negativeNumber(n){
//     return n * -1;
// }
// const doubledNumbers = numbers.map(doubledNumber);
// const squaredNumbers = numbers.map(squaredNumber);
// const negativeNumbers = numbers.map(negativeNumber);

// //returns an new array of numbers doubled 
// console.log(doubledNumbers);
// console.log(squaredNumbers);
// console.log(negativeNumbers);


// // array of numbers with only even numbers 
// function getEven(n){
//     return n % 2 === 0;
// }

// const evenNumbers = numbers.filter(getEven);
// console.log(evenNumbers);

// // every method 
// // determine (true or false) if all numbers in arrary are greater than 0

// function allNumsGreaterThanZero(n){
//     return n > 0;
//     // returns a boolean value
// }
// let myNumbers = [1, 2, 3 , 5, 10, 1, 10 ,-20];

// console.log(myNumbers.every(allNumsGreaterThanZero));


/// practicing array methods on Rick and Morty API 

// create async function to get data
// fetch data and assign to variable response 
// parse data into json 

// const response = await fetch("https://rickandmortyapi.com/api/character");
// const data = await response.json();
// console.log(data);
// }

// while current api page is less than total pages of api:
    //fetch data 
    //push data in array 




async function getRickAndMorty(){
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data;

}
    //store info in variable

async function getAllRickAndMortyCharacters(){
    const data = await getRickAndMorty();
    const totalPages = data.info.pages;
    let page = 1;
    let collectedData = []; 
    const nextPageURL = data.info.next;
    let active = true;
    try {
        while(active){
            if (page <= totalPages){
                const fetchedData = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
                const newData = await fetchedData.json();
                const characterData = newData.results;
                collectedData.push(characterData);
                page += 1;
            } else {
                active = false; 
                console.log(collectedData);
                return (collectedData);
            }

        } 
    } catch(err){
        console.log(err);
    }
  
}

//function build character card  



   
async function characterInfo(){
    let collectedData =  await getAllRickAndMortyCharacters();
       //gets name
    let html = ``;  
    function getCharacterName(item){
        function buildCharacterCard(character){
            
            html += `
                <div class = "character-card" id=${character.id}>
                    <div class = "character-name">
                        <h2>${character.name}</h2>
                    </div>
                    <div class = "character-img">
                        <img src = "${character.image}" alt = "character photo">
                    </div>
                    <div class = "character-species">
                        <p>Species: ${character.species}</p>
                    </div>
                    <div class = "character-origin">
                        <p>Origin: ${character.origin.name}</p>
                    </div>
                    <div class = "character-status">
                        <p>Status: ${character.status}</p>
                    </div>
                </div>
            `
            console.log(character.name);
        }
        item.forEach(buildCharacterCard);
    }




 collectedData.forEach(getCharacterName);
  
 const characterCards = document.querySelector(".all-characters");

 characterCards.innerHTML = html;

    

}



characterInfo();

 
