const SUPERHERO_TOKEN = SUPERHERO_TOKEN_API;
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById('newHeroButton')

const heroImageDiv = document.getElementById('heroImage')

// This is a fetch api and get did a function for it so we can use it 
const getSuperHero = (id, name) => {
    //  When we search a hero it would be
    //  name => base_url/search/batman
    //  id => base_url/id
    // json.results[0].image.url will get you the first result of the array since there will be mul

    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        heroImageDiv.innerHTML = `<img src="${json.image.url}" height=200 width=200/>`
    })
    }


const getSearchSuperHero


//  This makes it so you can get a random hero
const randomHero = () => {
    const numberofHeros = 731
   return Math.floor(Math.random() * numberofHeros) + 1    
}

newHeroButton.onclick = () => getSuperHero(randomHero())

