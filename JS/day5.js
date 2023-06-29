// let js = "JavaScript";
// const charsInJavaScript = js.split("");

// console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// const companies = companiesString.split(",");

// console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// const words = txt.split(" ");

// console.log(words);
// // el texto tiene caracteres especiales piensa cómo puedes obtener solo las palabras
// // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


// const shoppingCart = [
//     "Milk",
//     "Mango",
//     "Tomato",
//     "Potato",
//     "Avocado",
//     "Meat",
//     "Eggs",
//     "Sugar",
//   ]; // Lista de productos alimenticios

//   console.log(shoppingCart); // -> todo el carrito de compras en array
//   console.log(shoppingCart[0]); //  -> Milk
//   console.log(shoppingCart[7]); //  -> Sugar

//   let lastIndex = shoppingCart.length - 1;
//   console.log(shoppingCart[lastIndex]); //  -> Sugar

// var patron=new RegExp(/^[0-9.]+$/);
// document.write(patron.test(11 + "a"));



const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("melon"); // 0

console.log(index)

if (index === -1) {
    console.log("Esta fruta no existe en el array.");
} else {
    console.log("Esta fruta existe en el array.");
}

index === -1
    ? console.log("No Existe")
    : console.log("Existe");


const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6
console.log(numbers.lastIndexOf(4)); //  3
console.log(numbers.lastIndexOf(6)); // -1

