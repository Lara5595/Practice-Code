const title_elem = document.querySelector(".article-title")
description_elem = document.querySelector(".article-description")

let search = window.location.search.substring(1);

if (search){
    let api = "https://en.wikipedia.org/w/api/php?format=json&action=query@origin=*&prop=extracts&exintro&explaintext&redirects=1&title=" + search

    fetch(api)
        .then(response => response.json())
        .then(response =>{
            response = response.query.pages;
            let pageid = Object.keys(response)[0];
            let extract = response[pageid].extract;

            title_elem.innerHTML = search;
            description_elem.innerHTML = extract
        })

}