const SUPERHERO_TOKEN = SUPERHERO_TOKEN_API;

const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;


const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')



// This get the random superhero
const getSuperHero = (id) => {
    // name 👉 base_url/search/batman
    // json.results[0].image.url
    // id: 👉 base_url/id
    // json.image.url
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.powerstats)
            const superHero = json
            showHeroInfo(superHero)
        })
}


//This is so we can use emojis
const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}


// This creates the structure and shows the heroes info
const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" height=200 width=200/>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')

    heroImageDiv.innerHTML = `${name}${img}${stats}`
}

// <p>💪 Strength: ${json.powerstats.strength}</p><p>🧠 Intelligence: ${json.powerstats.intelligence}</p><p>🧠 Combat: ${json.powerstats.intelligence}</p><p>🧠 Speed: ${json.powerstats.intelligence}</p><p>🧠 Durability: ${json.powerstats.intelligence}</p>



// This is so you can search by typing and only gets the first result of the array
const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            showHeroInfo(hero)
        })
}


// This makes it so it gets a random hero every time
const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)

