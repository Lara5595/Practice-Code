$(document).ready(function (){

    $("#myform").submit(function(){

        let search = $("#books").val();

        if (search == '') {
            alert("Please enter something in the field first");
        } else {
            let url = '';
            let img = '';
            let title = '';
            let author = '';

            // This gets the google api + the search
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){

                console.log(response);


            });

        }

    })



    return false;

})