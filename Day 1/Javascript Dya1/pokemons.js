const $listPokemon = document.querySelector('.list-pokemons');
const $listPokemons = document.querySelector('.list-img');
const urlPokeApi = "https://pokeapi.co/api/v2/pokemon";

fetch(urlPokeApi)
  .then(response => response.json())
  .then((data) => {
    const pokemons = data.results;
    pokemons.forEach((pokemon) => {
      const li = document.createElement('li');
      li.textContent = pokemon.name;
      $listPokemon.append(li);
    });
  })
