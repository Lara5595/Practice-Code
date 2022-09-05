//first question
function greet(message) {
    return "hello world";
}

console.log("Hello my name is david and " + greet());
console.log(greet());

// end of first question

// second question
function firstNonConsecutive (arr) {
    for (let i=0; i < arr.length -1; i++) {
        let curr = arr[i];
        let next = arr[i + 1];

        if (curr + 1 !== next) {
            return next;
        }
    }
    return null;
}

console.log(firstNonConsecutive);
// end of question