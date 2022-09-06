//first question
function greet(message) {
    return "hello world";
}

console.log("Hello my name is david and " + greet());
console.log(greet());


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

// 3rd question
function getChar(c){
    return String.fromCharCode(c);
}

// 4th question
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);

}

// 5th question
function checkForFactor (base, factor) {
    if (base % factor === 0) {
        return true
    } else {
        return false;
    }
}