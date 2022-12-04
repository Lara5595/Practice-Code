// This is the api we are going to use
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

// stuff you don't have to wait for
console.log('run 1st')

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

// stuff you have to wait for
// I wrapped it in a function so we can use the button
const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => {
 console.log(json.message)
dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
})
}
    
console.log('run 3rd')


dogButton.onclick = () => getNewDog();