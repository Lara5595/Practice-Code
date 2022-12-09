function bookSearch(){
    // . value gets what the user typed
    const search = document.getElementById('search').value
    document.getElementById('results').innerHTML = ""
    console.log(search)

    $.ajax({
        // Plus search adds what the user search on the search bar
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        success: function (data) {
            console.log(data)
            for (i = 0; i < data.items.length; i++){
                results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
            }
        },

        type: 'GET'
    });

}

document.getElementById('button').addEventListener('click', bookSearch, false)