// console.log('hello world');
// console.log('david');

// Variables (var, let, const)
// let name = 'Peter pan';
// console.log(name);

// sentence = 'how are you doing today, nice to see you, hope you have a great day!'
// console.log(sentence);

// operators
// food = parseFloat(prompt('How much was the food?'))
// we divide by 100 to make it into a decimal
// tipPercentage =  parseFloat(prompt('tip %?'))/100
// tipAmount = food * tipPercentage
// total = food + tipAmount 
// console.log('tipAmount', tipAmount);
// alert("Your total is " +  total);
// console.log('total', total);
// alert("and your total Tip was " + tipAmount)

// user input

// data types(strings, numbers)
// numbers - 1, 5, 10, 100 ,2.5
// strings - 'hello', "what is up"
// array - []
// objects {}
// booleans - true / false

/* Math Operations
Multiply *
Divide /
Exponents **
Modulo/Remainder %  ex 5%2 = 1
Add + 
Subtract - 
*/
/* Math methods
Math.floor  ex. Math.floor(110.25) rounds Down to 110
Math.ceil   ex. Math.ceil(110.25) rounds UP to 111
Math.random ex  Math.random() * 10 that will get random numbers from 1 to 9
*/


// Baby weather app (conditionals)
// if rain = "Grab your umbrella"
// else " wear your sunglasses"

// let weather = prompt("How is the weather")
//
// if (weather == 'rainy') {
//     document.getElementById("output").innerHTML = "Grab your umbrella ⛱";
// } else if (weather == 'sunny') {
//     document.getElementById("output").innerHTML = "Wear Sunglasses 🌞";
// } else {
//     document.getElementById("output").innerHTML = "Please choose between sunny or rainy";
// }

// conditional operators
// ==, ====, >, <, <=, >=, !=, !==




// Functions
// this function call sayMyName it has 0 arguments
// function sayMyName() {
//   console.log('David without parameter')
// }

// sayMyName('David');
// this function call sayMyName2 it has 1 argument called name and it logs out your name in console.

// function sayMyName2(name) {
//     console.log(name)
// }

// sayMyName2('David');

// function greeting(name) {
//   greet = 'hi ' + name + ', Nice to meet you!'
//   console.log(greet)
// }

// greeting('Lance');



// template literals

// function greeting(name) {
//   greet = `hi ${name}, Nice to meet you!`
//   console.log(greet)
// }

// greeting('Lance');


// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(1,2));

// or if you store if you can just log
// num1 = sum(1, 2)
// console.log(num1);


// function calculateFoodTotal(food, tip) {
//   let tipPercentage = tip / 100
//   let tipAmount = food * tipPercentage
//   let  total = food + tipAmount
//   return total
// }

// console.log(calculateFoodTotal(100,20));

// or you can reuse your functions in this case its going to be sum to get the total
// function calculateFoodTotal(food, tip) {
//   let tipPercentage = tip / 100
//   let tipAmount = food * tipPercentage
//   let total = sum(food, tipAmount)
//   return total
// }

// console.log(calculateFoodTotal(100,20));

// function sum(a, b) {
//   return a + b;
// }
// This ^^ is the same as the function below just in es6 version

// ES6 new way to write functions Arrow functions
// arrow function with explicit return
// const sumArrow = (a,b) => {
// return a + b
// }

//  shorter version is
// arrow function with implicit return
// IMPORTRANT: For implicit return, revome curly braces
const sumArrow = (a, b) => a + b

console.log(sumArrow(10,50));


// assigment from youtube
/*
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// function add(a,b){
//     //Add function here
//     return a+b ;
// }
// console.log(add(20,30));

// arrow function
let add = (a,b) => a+b;
console.log(add(30,50));
 // 2.
// function sub(c,d) {
//     return c - d;
// }
// arrow function
let sub = (a,b) => a-b;
console.log(sub(20,10));

// function div(e,f){
//     return e/f;
// }
let div = (a,b) => a/b;
console.log(div(20/10));


// function mul(a,b){
//     return a * b;
// }

let mul = (a,b) => a*b;
console.log(mul(20,5));

console.log('hello from the SUM exercise')
/*
  TODO: create a function that console logs the result of any of the above operations.
*/

// I am creating another file for the assignments
