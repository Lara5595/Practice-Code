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

let weather = prompt("How is the weather")

if (weather == 'rainy') {
    document.getElementById("output").innerHTML = "Grab your umbrella ⛱";
} else if (weather == 'sunny') {
    document.getElementById("output").innerHTML = "Wear Sunglasses 🌞";
} else {
    document.getElementById("output").innerHTML = "Please choose between sunny or rainy";
}

// conditional operators
// ==, ====, >, <, <=, >=, !=, !==

