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

// 6th question
//
// function reverseWords(str){
//     return str.split(' ').reverse().join(' ');
// }
//
// console.log(reverseWords());

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

