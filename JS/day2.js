// let string = "JavaScript";

// console.log(string.toUpperCase()); // JAVASCRIPT

// let firstName = "Asabeneh";

// console.log(firstName.toUpperCase()); // ASABENEH

// let country = "Finland";

// console.log(country.toUpperCase()); // FINLAND


// let string = "JavasCript";

// console.log(string.toLowerCase()); // javascript

// let firstName = "Asabeneh";

// console.log(firstName.toLowerCase()); // asabeneh

// let country = "Finland";

// console.log(country.toLowerCase()); // finland

// substr(): Se necesitan dos argumentos, el índice inicial y el número de caracteres para dividir.

// let string = "JavaScript";
// console.log(string.substr(4, 6)); // Script

// let country = "Finland";
// console.log(country.substr(3, 4)); // land


// split(): El método split divide una cadena en un lugar específico.

// let string = "30 Days Of JavaScript";

// console.log(string.split()); // Cambios en una matriz -> ["30 Days Of JavaScript"]
// console.log(string.split(" ")); // Dividir a una matriz en el espacio -> ["30", "Days", "Of", "JavaScript"]

// let firstName = "Asabeneh";

// console.log(firstName.split()); // Cambiar a una matriz - > ["Asabeneh"]
// console.log(firstName.split("")); // Dividir en una matriz en cada letra ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

// console.log(countries.split(",")); // Dividir en cualquier matriz en coma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// substring(): Toma dos argumentos, el índice inicial y el índice final, pero no incluye el carácter en el índice final.

// let string1 = "JavaScript";

// console.log(string.substring(0, 4)); // Java
// console.log(string.substring(4, 10)); // Script
// console.log(string.substring(4)); // Script

// let country = "Finland";

// console.log(country.substring(0, 3)); // Fin
// console.log(country.substring(3, 7)); // land
// console.log(country.substring(3)); // land


// let string = "   30 Days Of JavaScript   ";

// console.log(string);
// console.log(string.trim(" "));

// let firstName = " Asabeneh ";

// console.log(firstName);
// console.log(firstName.trim()); // todavía elimina espacios al principio y al final de la cadena