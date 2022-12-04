const SUPERHERO_TOKEN = SUPERHERO_TOKEN_API;
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;


const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.querySelector('body').innerHTML += `<img src="${json.image.url}" height=200 width=200/>`
    })
    }

getSuperHero(20);

const img = "https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg"


