// 1. Write a JS code to print numbers from 1 to 10

function oneToTen() {
    for (let i = 0; i<=10; i++){
        console.log(i)
    }
}
// oneToTen()

//2.Function `printArray()` prints all the elements of a 2D array using nested for loops.

let arr = [
   [1, 2],
   [3, 4],
   [5, 6]
];

function printArray(arr) {
    for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length;j++) {
        console.log(arr[i][j]);
    }
    }
}

printArray(arr)

//3. Write a JS code to print Even numbers in given array
let arr1 = [13,23,12,45,22,48,66,100]

function evenNumbers(arr) {
for (let i = 0; i <arr.length; i++) {
    if (arr[i]%2==0) {
        console.log(arr[i]);
    }
}
}
evenNumbers(arr1);

// 4. Write a JS code to delete all occurrence of element in given array

