// This is the api we are going to use
// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming


fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(json => console.log(json))
    
