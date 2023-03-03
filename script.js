//All  pokemon images are from the Pokmon website https://www.pokemon.com/us/pokedex/ or the Bulbapedia website https://bulbapedia.bulbagarden.net/

window.onload = function () {
  
  // declare pokemons array of objects to capture the pokemon data, including: name, height, type, weight, attacks, and images.
  const pokemons = [
    {
      name: "Charmander",
      height: 0.6,
      weight: 18.7,
      type: "Fire",
      attack: ["Blaze", "Solar Power", "Hidden Ability"],
      image: "./images/charmander.png",
    },
    {
      name: "Charmeleon",
      height: 1.1,
      weight: 42,
      type: "Fire",
      attack: ["Blaze", "Solar Power", "Hidden Ability"],
      image: "./images/charmeleon.png",
    },
    {
      name: "Charizard",
      height: 1.7,
      weight: 200,
      type: "Fire",
      attack: ["Charizard", "Tough Claws", "Drought"],
      image: "./images/charizard.png",
    },
    {
      name: "Litten",
      height: 0.4,
      weight: 9.5,
      type: "Fire",
      attack: ["Blaze", "Intimidate", "Hidden Ability"],
      image: "./images/litten.png",
    },
    {
      name: "Torracat",
      height: 0.7,
      weight: 55,
      type: "Fire",
      attack: ["Blaze", "Intimidate", "Hidden Ability"],
      image: "./images/torracat.png",
    },
    {
      name: "Incineroar",
      height: 1.8,
      weight: 183,
      type: "Fire",
      attack: ["Blaze", "Intimidate", "Hidden Ability"],
      image: "./images/incineroar.png",
    },
    {
      name: "Salandit",
      height: 0.6,
      weight: 11,
      type: "Fire",
      attack: ["Corrosion", "Oblivious", "Hidden Ability"],
      image: "./images/salandit.png",
    },
    {
      name: "Salazzle",
      height: 1.2,
      weight: 49,
      type: "Fire",
      attack: ["Blaze", "Intimidate", "Hidden Ability"],
      image: "./images/salazzle.png",
    },
    {
      name: "Ho-oh",
      height: 3.8,
      weight: 438,
      type: "Fire",
      attack: ["Pressure", "Regenerator", "Hidden Ability"],
      image: "./images/ho-oh.png",
    },
    {
      name: "Squirtle",
      height: 0.5,
      weight: 20,
      type: "Water",
      attack: ["Torrent", "Rain Dish", "Hidden Ability"],
      image: "./images/squirtle.png",
    },
    {
      name: "Wartortle",
      height: 1.0,
      weight: 49.6,
      type: "Water",
      attack: ["Torrent", "Rain Dish", "Hidden Ability"],
      image: "./images/wartortle.png",
    },
    {
      name: "Blastoise",
      height: 1.6,
      weight: 188.5,
      type: "Water",
      attack: ["Torrent", "Mega Launcher", "Rain Dish"],
      image: "./images/blastoise.png",
    },
    {
      name: "Poliwag",
      height: 0.6,
      weight: 27.3,
      type: "Water",
      attack: ["Water Absorb", "Swift Swim", "Hidden Ability"],
      image: "./images/poliwag.png",
    },
    {
      name: "Poliwhirl",
      height: 1.0,
      weight: 44.1,
      type: "Water",
      attack: ["Water Absorb", "Swift Swim", "Hidden Ability"],
      image: "./images/poliwhirl.png",
    },
    {
      name: "Poliwrath",
      height: 1.3,
      weight: 119,
      type: "Water",
      attack: ["Water Absorb", "Swift Swim", "Hidden Ability"],
      image: "./images/poliwrath.png",
    },
    {
      name: "Lapras",
      height: 2.5,
      weight: 485,
      type: "Water",
      attack: ["Water Absorb", "Armor", "Hydration"],
      image: "./images/lapras.png",
    },
    {
      name: "Psyduck",
      height: 0.8,
      weight: 43.2,
      type: "Water",
      attack: ["Cloud Nine", "Swift Swim", "Hidden Ability"],
      image: "./images/psyduck.png",
    },
    {
      name: "Golduck",
      height: 1.7,
      weight: 168.9,
      type: "Water",
      attack: ["Cloud Nine", "Swift Swim", "Hidden Ability"],
      image: "./images/golduck.png",
    },
    {
      name: "Bulbasaur",
      height: 0.7,
      weight: 15.2,
      type: "Grass",
      attack: ["Overgrow", "Chlorophyll", "Hidden Ability"],
      image: "./images/bulbasaur.png",
    },
    {
      name: "Ivysaur",
      height: 1.0,
      weight: 28.7,
      type: "Grass",
      attack: ["Overgrow", "Chlorophyll", "Hidden Ability"],
      image: "./images/ivysaur.png",
    },
    {
      name: "Venusaur",
      height: 2.0,
      weight: 220.5,
      type: "Grass",
      attack: ["Venusaur", "Thick Fat", "Mega Venusaur"],
      image: "./images/venusaur.png",
    },
    {
      name: "Oddish",
      height: 0.5,
      weight: 11.9,
      type: "Grass",
      attack: ["Chlorophyll", "Run Away", "Hidden Ability"],
      image: "./images/oddish.png",
    },
    {
      name: "Gloom",
      height: 0.8,
      weight: 19,
      type: "Grass",
      attack: ["Chlorophyll", "Stench", "Hidden Ability"],
      image: "./images/gloom.png",
    },
    {
      name: "Vileplume",
      height: 1.2,
      weight: 41,
      type: "Grass",
      attack: ["Chlorophyll", "Effect Spore", "Hidden Ability"],
      image: "./images/vileplume.png",
    },
    {
      name: "Snivy",
      height: 0.6,
      weight: 17.9,
      type: "Grass",
      attack: ["Overgrow", "Contrary", "Hidden Ability"],
      image: "./images/snivy.png",
    },
    {
      name: "Servine",
      height: 0.8,
      weight: 35.3,
      type: "Grass",
      attack: ["Overgrow", "Contrary", "Hidden Ability"],
      image: "./images/servine.png",
    },
    {
      name: "Serperior",
      height: 3.3,
      weight: 138.9,
      type: "Grass",
      attack: ["Overgrow", "Contrary", "Hidden Ability"],
      image: "./images/serperior.png",
    },
    {
      name: "Seedot",
      height: 1.08,
      weight: 8.8,
      type: "Grass",
      attack: ["Early", "Pickpocket", "Bird"],
      image: "./images/seedot.png",
    },
    {
      name: "Nuzleaf",
      height: 1.0,
      weight: 61.7,
      type: "Grass",
      attack: ["Early", "Pickpocket", "Bird"],
      image: "./images/nuzleaf.png",
    },
    {
      name: "Shiftry",
      height: 1.3,
      weight: 131.4,
      type: "Grass",
      attack: ["Chlorophyll", "Pickpocket", "bird"],
      image: "./images/shiftry.png",
    },
    {
      name: "Pichu",
      height: 0.3,
      weight: 4.4,
      type: "Electric",
      attack: ["Static", "Lighting Rod", "Hidden Ability"],
      image: "./images/pichu.png",
    },
    {
      name: "Pikachu",
      height: 0.4,
      weight: 13.2,
      type: "Electric",
      attack: ["Pikachu", "Cosplay Pikachu", "LightingRod"],
      image: "./images/pikachu.png",
    },
    {
      name: "Raichu",
      height: 0.8,
      weight: 66.1,
      type: "Electric",
      attack: ["Raichu", "Raichu Hidden Ability", "Surge Surfer"],
      image: "./images/raichu.png",
    },
    {
      name: "Elekid",
      height: 0.6,
      weight: 51.8,
      type: "Electric",
      attack: ["Static", "Vital Spirit", "Hidden Ability"],
      image: "./images/elekid.png",
    },
    {
      name: "Electrabuzz",
      height: 1.1,
      weight: 66.1,
      type: "Electric",
      attack: ["Static", "Vital Spirit", "Hidden Ability"],
      image: "./images/electrabuzz.png",
    },
    {
      name: "Electivire",
      height: 1.8,
      weight: 305.6,
      type: "Electric",
      attack: ["Motor Drive", "Vital Spirit", "Hidden Ability"],
      image: "./images/electivire.png",
    },
    {
      name: "Voltorb",
      height: 1.08,
      weight: 22.9,
      type: "Electric",
      attack: ["Soundproof", "Aftermath", "Hidden Ability"],
      image: "./images/Voltorb.png",
    },
    {
      name: "Electrode",
      height: 1.2,
      weight: 146.8,
      type: "Electric",
      attack: ["Soundproof", "Aftermath", "Hidden Ability"],
      image: "./images/Electrode.png",
    },
    {
      name: "Electrike",
      height: 0.6,
      weight: 33.5,
      type: "Electric",
      attack: ["Staic", "Minus", "Hidden Ability"],
      image: "./images/electrike.png",
    },
    {
      name: "Manectric",
      height: 1.5,
      weight: 88.6,
      type: "Electric",
      attack: ["Static", "Minus", "Manectric"],
      image: "./images/manectric.png",
    },
    {
      name: "Mewtwo",
      height: 2.0,
      weight: 122,
      type: "Psychic",
      attack: ["Pressure", "Mewtwo", "Insomnia"],
      image: "./images/mewtwo.png",
    },
    {
      name: "Lugia",
      height: 5.2,
      weight: 476.2,
      type: "Psychic",
      attack: ["Pressure", "Multiscale", "Hidden Ability"],
      image: "./images/lugia.png",
    },
    {
      name: "Beldum",
      height: 0.6,
      weight: 209.9,
      type: "Psychic",
      attack: ["Clear Body", "Light Metal", "Hidden Ability"],
      image: "./images/beldum.png",
    },
    {
      name: "Metang",
      height: 1.2,
      weight: 446.4,
      type: "Psychic",
      attack: ["Clear Body", "Light Metal", "Hidden Ability"],
      image: "./images/metang.png",
    },
    {
      name: "Metagross",
      height: 1.6,
      weight: 550,
      type: "Psychic",
      attack: ["Clear Body", "Metagross", "Hidden Ability"],
      image: "./images/metagross.png",
    },
    {
      name: "Inkay",
      height: 0.4,
      weight: 7.7,
      type: "Psychic",
      attack: ["Cups", "Suction", "Hidden Ability"],
      image: "./images/inkay.png",
    },
    {
      name: "Malamar",
      height: 1.5,
      weight: 103.6,
      type: "Psychic",
      attack: ["Clear Body", "Light Metal", "Hidden Ability"],
      image: "./images/malamar.png",
    },
  ];

//Declaring variables to target specific elements on the page
  let select = document.getElementById("pokemonOptions");
  let cardContainer = document.getElementById("card-container");
  let searchMenu = document.getElementById("search-menu");
  let HomeMenu = document.getElementById("home-menu");

  //This function is to style and dsiplay all the pokemon cards
  function showPokemon(pokemon) {
    let card = document.createElement("div");
    card.setAttribute("id", "card");
    cardContainer.appendChild(card);
    let pokemonCards = pokemon.image;
    let imgEl = document.createElement("img");
    imgEl.setAttribute("id", "imgEl");
    imgEl.src = pokemonCards;
    card.appendChild(imgEl);
    let pokemonName = pokemon.name;
    let headingTwo = document.createElement("h2");
    headingTwo.setAttribute("id", "pokemon-name");
    headingTwo.textContent = pokemonName;
    card.appendChild(headingTwo);
    let stats = document.createElement("div");
    let statsTitle = document.createElement("h4");
    statsTitle.setAttribute("id", "stats-title");
    statsTitle.textContent = "stats";
    card.appendChild(statsTitle);
    stats.setAttribute("id", "stats");
    card.appendChild(stats);
    let height = document.createElement("div");
    height.setAttribute("id", "height");
    height.setAttribute("class", "stat-item");
    stats.appendChild(height);
    let heightTitle = document.createElement("p");
    heightTitle.textContent = "Height";
    let heightStat = document.createElement("p");
    heightStat.textContent = pokemon.height + "m";
    height.appendChild(heightStat);
    height.appendChild(heightTitle);
    let type = document.createElement("div");
    type.setAttribute("id", "type");
    type.setAttribute("class", "stat-item");
    stats.appendChild(type);
    let typeTitle = document.createElement("p");
    typeTitle.textContent = "Type";
    let typeStat = document.createElement("p");
    typeStat.textContent = pokemon.type;
    type.appendChild(typeStat);
    type.appendChild(typeTitle);
    let weight = document.createElement("div");
    weight.setAttribute("id", "weight");
    weight.setAttribute("class", "stat-item");
    stats.appendChild(weight);
    let weightType = document.createElement("p");
    weightType.textContent = "Weight";
    let weightStat = document.createElement("p");
    weightStat.textContent = pokemon.weight + "lbs";
    weight.appendChild(weightStat);
    weight.appendChild(weightType);
    let attacksTitle = document.createElement("h4");
    attacksTitle.setAttribute("id", "attacks-title");
    attacksTitle.textContent = "Attacks";
    card.appendChild(attacksTitle);
    let attacks = document.createElement("div");
    attacks.setAttribute("id", "attacks");
    card.appendChild(attacks);

    // This forEach method is used to get the attack array from the pokemon
    pokemon.attack.forEach((element) => {
      let attack = document.createElement("p");
      attack.setAttribute("id", "attack");
      attack.textContent = element;
      attacks.appendChild(attack);
    });

    //If statement is used to assign each pokemon type to a specific colour
    if (pokemon.type == "Fire") {
      imgEl.style.background = "red";
      height.style.background = "red";
      type.style.background = "red";
      weight.style.background = "red";
    } else if (pokemon.type == "Water") {
      imgEl.style.background = "blue";
      height.style.background = "blue";
      type.style.background = "blue";
      weight.style.background = "blue";
      height.style.color = "white";
      type.style.color = "white";
      weight.style.color = "white";
    } else if (pokemon.type == "Grass") {
      imgEl.style.background = "green";
      height.style.background = "green";
      type.style.background = "green";
      weight.style.background = "green";
      height.style.color = "white";
      type.style.color = "white";
      weight.style.color = "white";
    } else if (pokemon.type == "Electric") {
      imgEl.style.background = "Yellow";
      height.style.background = "yellow";
      type.style.background = "yellow";
      weight.style.background = "yellow";
    } else if (pokemon.type == "Psychic") {
      imgEl.style.background = "Purple";
      height.style.background = "purple";
      type.style.background = "purple";
      weight.style.background = "purple";
      height.style.color = "white";
      type.style.color = "white";
      weight.style.color = "white";
    }
  }

  //This function is to show the pokemon names on the pokemonOptions select element 
  function displayPokemonOptions() {
    let pokemonNames = [];
    for (let i = 0; i < pokemons.length; i++) {
      pokemonNames.push(pokemons[i].name);
      showPokemon(pokemons[i]);
    }

    //sort the pokemon name list in alphabetically order
    pokemonNames.sort();

    //display the pokemon names in the drop down list
    for (let j = 0; j < pokemonNames.length; j++) {
      let opt = pokemonNames[j];
      let el = document.createElement("option");
      el.textContent = opt;
      el.value = opt;
      select.appendChild(el);
    }
  }

  // This function will filter the pokemon displayed on the page to th users choice of either pokemon type or pokemon name
  function filterPokemonCards() {
    let types = document.getElementById("pokemon-types");
    let userPokemonChoice = select.options[select.selectedIndex].value;
    let userTypeChoice = types.options[types.selectedIndex].value;
    cardContainer.innerHTML = "";
    for (let i = 0; i < pokemons.length; i++) {
      if (
        userPokemonChoice == pokemons[i].name ||
        userTypeChoice == pokemons[i].type
      ) {
        showPokemon(pokemons[i]);
      }
    }

    //To display the home menu after the button was clicked
    searchMenu.style.display = "none";
    HomeMenu.style.display = "block";
  }

  //Declaring button variables
  let searchPokemonBtn = document.querySelector(".search-pokemon");
  let searchPokemonTypeBtn = document.querySelector(".search-type");

  //Flitering the specific type or pokemon the user wants on click
  searchPokemonBtn.onclick = filterPokemonCards;
  searchPokemonTypeBtn.onclick = filterPokemonCards;

  displayPokemonOptions();
}


 