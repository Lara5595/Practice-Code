// Get the sum of all the elements For 2 arrays

let array1 = [1,2,3]; // 6
let array2 = [4,5,6]; //15
// array 1 + array2 = 21
// function sumArray(arr1, arr2) {
//     let arr1Sum = 0;
//     let arr2Sum = 0;
//
//     for (let i = 0; i < arr1.length; i++) {
//         arr1[i] = arr1Sum
//     }
//
// }
let array3 = ['a','b','c'];

let sum1 = array1.reduce(function(acc,cur) {
    return acc + cur;
},0);

let sum2 = array2.reduce(function(acc,cur) {
    return acc + cur;
},0);

let sumOfArrays = sum1 + sum2

let x = array3.filter(function(num) {
    return num === 'a';
})