const pokemons = [
    {
        name: "Squirle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        type: "Water"
    },
    {
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        type: "Fire"
    },
    {
        name: "Bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        type: "Grass"
    },
    {
        name: "Pikachu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        type: "Electric"
    }
];


let index = 0;

function increaseIndex(index) {
    index = (index + 1) % pokemons.length;
    return index;
}

function changeColorType(typeElement, type) {
    switch(type) {
        case "Water":
            typeElement.style.backgroundColor = "#638ff0";
            break;
        case "Fire":
            typeElement.style.backgroundColor = "#fd431b";
            break;
        case "Grass":
            typeElement.style.backgroundColor = "#78cd56";
            break;
        case "Electric":
            typeElement.style.backgroundColor = "#f8d029";
            break;
        default:
            typeElement.style.backgroundColor = "#000";
            break;
    }
}

function changePokemon() {
    // Tăng index
    index = increaseIndex(index);

    const image = document.querySelector(".image");
    const name = document.querySelector(".name");
    const type = document.querySelector(".type");

    // Hiển thị thông tin Pokémon
    const pokemon = pokemons[index];
    image.src = pokemon.image;
    name.textContent = pokemon.name;
    type.textContent = pokemon.type;

    // Thay đổi màu type
    changeColorType(type, pokemon.type);
}

document.querySelector('.content').addEventListener('click', changePokemon);