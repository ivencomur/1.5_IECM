

//Part 1: forEach loops

// I´ll leave my PokemonList part just like it was before:
//let pokemonList= [
    //{name:"Articuno", height: 1.7, types: ["ice","flying."], imgFile: "img/articuno.svg"}, 
    //{name:"Charizard", height: 1.7, types: ["fire"," flying."], imgFile: "img/charizard.svg"}, 
    //{name:"Butterfree", height: 1.1, types: ["bug"," flying."], imgFile: "img/butterfree.svg"}, 
    //{name:"Pidgeot", height: 1.5, types: ["flying"," normal."], imgFile: "img/pidgeot.svg"}
//];
// Here, I will define the maximum values for the categories mentioned:

//let maxheight = 1.69;
//let averageheight = 1.5;
//let shortheight = 1.2;
// It´s time now to elaborate the functions to print details of each Pokémon I refer to:

//pokemonList.forEach(pokemon => {
    //if (pokemon.height > maxheight) {       
        //let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that Pokémon is tall!</p>`;
        //let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="200"/>`;
        
        //document.write(interpolatedText);
        //document.write(pokemonImage);
    //} else {
        //if (pokemon.height >= averageheight) {
            //let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} And that is a regular //Pokémon! </p>`;
            //let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="150"/>`;
            //document.write(interpolatedText);
            //document.write(pokemonImage);
            //}  else {
                //if (pokemon.height <= shortheight) {
                    //let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that is a short //Pokémon!</p>`;
                    //let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="110"/>`;  
                    //document.write(interpolatedText);
                    //document.write(pokemonImage);
                //}
            //}
       //}
    //}
//); 


// Part 2: IIFE
// 1. Wrapping the pokemonList array in an IIFE to prevent accidental access to global state:

//(function() {
    //let pokemonList = [
        //{name:"Articuno", height: 1.7, types: ["ice","flying."], imgFile: "img/articuno.svg"},
        //{name:"Charizard", height: 1.7, types: ["fire"," flying."], imgFile: "img/charizard.svg"},
        //{name:"Butterfree", height: 1.1, types: ["bug"," flying."], imgFile: "img/butterfree.svg"},
        //{name:"Pidgeot", height: 1.5, types: ["flying"," normal."], imgFile: "img/pidgeot.svg"}
    //];
//})();
// 2. Creating a pokemonRepository variable to hold the IIFE and assign it to that variable:

//let pokemonRepository = (function() {
    //let pokemonList = [
        //{name:"Articuno", height: 1.7, types: ["ice","flying."], imgFile: "img/articuno.svg"},
        //{name:"Charizard", height: 1.7, types: ["fire"," flying."], imgFile: "img/charizard.svg"},
        //{name:"Butterfree", height: 1.1, types: ["bug"," flying."], imgFile: "img/butterfree.svg"},
        //{name:"Pidgeot", height: 1.5, types: ["flying"," normal."], imgFile: "img/pidgeot.svg"}
    //];
// I found it practical to return an empty object so I could run it for the first time:
//return {};
//})();

// 3. Adding public functions (getAll and add) to return or modify (add) the list:
// Keeping the list as is:
let pokemonRepository = (function() {
    let pokemonList = [
        {name:"Articuno", height: 1.7, types: ["ice","flying."], imgFile: "img/articuno.svg"},
        {name:"Charizard", height: 1.7, types: ["fire"," flying."], imgFile: "img/charizard.svg"},
        {name:"Butterfree", height: 1.1, types: ["bug"," flying."], imgFile: "img/butterfree.svg"},
        {name:"Pidgeot", height: 1.5, types: ["flying"," normal."], imgFile: "img/pidgeot.svg"}
    ];
// Adding the eliciting function:
    function getAll() {
        return pokemonList;
    }
//Including the "add" function:
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
//4. Asking for the return of the object with the functions wich must match the key names: 
    return {
        getAll: getAll,
        add: add
    };
})();
// 5. Updating the loop code (forEach) to match the changes made (getALL):
// Defining the parameters of height to categorize the data:
let maxheight = 1.69;
let averageheight = 1.5;
let shortheight = 1.2;


// In order to test the add() function, I concluded that I must add a new Pokémon to the list,
//which is my main Pokémon:

pokemonRepository.add({
    name: "Pikachu", height: 1.04, types: ["Electric, Mouse."], imgFile: "img/pikachu.svg"}
);

// Using one last time getALL to get the Pokémon list:
pokemonRepository.getAll().forEach(pokemon => {
    if (pokemon.height > maxheight) {      
        let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that Pokémon is tall!</p>`;
        let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="200"/>`;
       
        document.write(interpolatedText);
        document.write(pokemonImage);
    } else {
        if (pokemon.height >= averageheight) {
            let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} And that is a regular Pokémon! </p>`;
            let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="150"/>`;
            document.write(interpolatedText);
            document.write(pokemonImage);
        } else {
            if (pokemon.height <= shortheight) {
                let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that is a short Pokémon!</p>`;
                let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="110"/>`;  
                document.write(interpolatedText);
                document.write(pokemonImage);
            }
        }
    }
});


