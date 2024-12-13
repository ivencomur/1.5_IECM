let pokemonList= [
    {name:"Articuno", height: 1.7, types: ["ice","flying."], imgFile: "img/articuno.svg"}, 
    {name:"Charizard", height: 1.7, types: ["fire"," flying."], imgFile: "img/charizard.svg"}, 
    {name:"Butterfree", height: 1.1, types: ["bug"," flying."], imgFile: "img/butterfree.svg"}, 
    {name:"Pidgeot", height: 1.5, types: ["flying"," normal."], imgFile: "img/pidgeot.svg"}
];

let maxheight = 1.69;
let averageheight = 1.5;
let shortheight = 1.2;

pokemonList.forEach(pokemon => {
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
            }  else {
                if (pokemon.height <= shortheight) {
                    let interpolatedText = `<p>${pokemon.name}. Height: ${pokemon.height}m. Types: ${pokemon.types} Wow, that is a short Pokémon!</p>`;
                    let pokemonImage = `<img src="${pokemon.imgFile}" width="200" height="110"/>`;  
                    document.write(interpolatedText);
                    document.write(pokemonImage);
                }
            }
        }
    }); 



    


