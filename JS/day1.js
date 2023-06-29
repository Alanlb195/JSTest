// var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
//             'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// // Declarando variables con valores numéricos
// let edad = 100 // edad en años
// const constante = 9.81 // gravedad terrestre en m/s2
// const puntoDeEbullición  = 100 // punto de ebullición del agua, temperatura en oC
// const PI = 3.14 // constante geométrica

// console.log(constante, puntoDeEbullición, PI)

// // Las variables también pueden ser declaradas en una línea separada por una coma
// let nombre = 'Asabeneh', // nombre de una persona
// trabajo = 'profesor',
// viveEn = 'Finlandia';
// numero = '1292'
// console.log(nombre, trabajo, viveEn, numero);


// // Tipos de datos primitivos
// // No pueden ser modificados

// let word = "JavaScript";
// word[0] = "Y";

// console.log(word)
// console.log(nombre);
// nombre = `Alan`


// // Comparaciones (no estricto y estricto)

// let numOne = 3;
// let numTwo = "3";

// console.log(numOne == numTwo); // Verdadero
// console.log(numOne === numTwo); // Verdadero

// let js = "JavaScript";
// let py = "Python";

// console.log(js == py); // Falso

// let lightOn = true;
// let lightOff = false;

// console.log(lightOn == lightOff); // Falso

// Tipos de datos no primitivos

// let nums = [1, 2, 3];
// let numbers = [1, 2, 3];

// console.log(nums == numbers); // Falso

// let usuarioUno = {
//   nombre: "Asabeneh",
//   papel: "teaching",
//   pais: "Finland",
// };

// let usuarioDos = {
//   nombre: "Asabeneh",
//   papel: "teaching",
//   pais: "Finland",
// };

// console.log(usuarioUno == usuarioDos); // Falso


// MATH

// const PI = Math.PI;

// // Redondeo al número más cercano
// // si es superior a 0,5 hacia arriba si es inferior a 0,5 redondeo hacia abajo

// console.log(Math.round(PI)); // 3 para redondear valores al número más cercano

// console.log(Math.round(9.81)); // 10

// console.log(Math.floor(PI)); // 3 redondeando hacia abajo

// console.log(Math.ceil(PI)); // 4 redondeando hacia arriba

// console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, devuelve el valor mínimo

// console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, devuelve el valor máximo

// const randNum = Math.random(); // crea un número aleatorio entre 0 y 0.999999
// console.log(randNum);

// // Vamos a crear un número aleatorio entre 0 y 10

// const num = Math.floor(Math.random() * 11); // crea un número aleatorio entre 0 y 10
// console.log(num);

// //Valor absoluto
// console.log(Math.abs(-10)); // 10

// //Raíz cuadrada
// console.log(Math.sqrt(100)); // 10
// console.log(Math.sqrt(2)); // 1.4142135623730951

// // Poder (Exponente)
// console.log(Math.pow(3, 3)); // 27 (3 * 3 * 3)

// console.log(Math.E); // 2.718

// // Logaritmo
// // Devuelve el logaritmo natural con base E de x, Math.log(x)
// console.log(Math.log(2)); // 0.6931471805599453
// console.log(Math.log(10)); // 2.302585092994046

// // Devuelve el logaritmo natural de 2 y 10 respectivamente
// console.log(Math.LN2); // 0.6931471805599453
// console.log(Math.LN10); // 2.302585092994046

// // Trigonometría
// Math.sin(0);
// Math.sin(60);

// Math.cos(0);
// Math.cos(60);


// const parrafo =
//   "Mi nombre es Asabeneh Yetayeh. Vivo en Finlandia,\\ Helsinki.\
// Soy profesora y me encanta enseñar. Enseño HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis y D3.js para cualquier persona interesada en aprender.\\n \
// A fines de 2019, estaba pensando en expandir mi enseñanza y llegar a \
// a la audiencia global y comencé un desafío de Python del 20 de noviembre al 19 de diciembre.\
// \t\"Fue una de las experiencias más gratificantes e inspiradoras\".\
// Ahora, estamos en 2020. Disfruto preparando el desafío 30DaysOfJavaScript y \
// Espero que tú también estés disfrutando.";

// console.log(parrafo);


// INTERPOLACION

// console.log(`La suma de 2 y 3 es 5`); // escribiendo estáticamente los datos
// let a = 2;
// let b = 3;
// console.log(`La suma de ${a} y ${b} es ${a + b}`); // inyectando los datos dinámicamente


// let espacio = " ";
// let primerNombre = "Asabeneh";
// let apellido = "Yetayeh";
// let pais = "Finland";
// let ciudad = "Helsinki";
// let idioma = "JavaScript";
// let trabajo = "profesora";
// let edad = 250;
// let nombreCompleto = primerNombre + espacio + apellido;

// let personaInfoDos = `Soy ${nombreCompleto}. Tengo ${edad} años. Vivo en ${pais}.`; //ES6 - Método de interpolación de cadenas
// let personaInfoTres = `Soy ${nombreCompleto}. Vivo en ${ciudad}, ${pais}. Soy una ${trabajo}. Enseño ${idioma}.`;
// console.log(personaInfoDos);
// console.log(personaInfoTres);



