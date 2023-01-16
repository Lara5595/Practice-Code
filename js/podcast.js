$('#submit').click(function(e) {
    e.preventDefault();
    var question = $('#question').val();
    $.ajax({
        url: 'https://api.openai.com/v1/engines/davinci/completions',
        type: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + CHAT_AI_KEY
        },
        data: JSON.stringify({
            prompt: question,
            max_tokens: 50,
            stop: "?"
        }),
        success: function(response, status, xhr) {
            console.log(response)
            var remainingTokens = xhr.getResponseHeader("X-RateLimit-Remaining");
            console.log("Remaining tokens: " + remainingTokens);
            var generatedText = response.choices[0].text
            $('#generated-text').append(generatedText);
            console.log(this.data)
        }
    });
});




