var currency1 = document.getElementById("CURRENCY1");
var currency2 = document.getElementById("CURRENCY2");
var warn = document.getElementById("warningMessage");

currency1.addEventListener('keydown', restrictToNumbers);
currency2.addEventListener('keydown', restrictToNumbers);

function restrictToNumbers(event) {

    // Get the code of the Key
    var keyCode = event.which ? event.which : event.keyCode;
    var isValidInput = false;

    // Let the usage of Backspace, tab and delete
    if (
        keyCode === 8 || // Backspace
        keyCode === 9 || // Tab
        keyCode === 46 || // Delete
        (keyCode >= 37 && keyCode <= 40) // Navegation arrows < >
    ) {
        isValidInput = true;
    } else {
        // Validar la entrada usando una expresión regular
        var inputChar = String.fromCharCode(keyCode);
        var regex = /^[0-9.]+$/; // Accept numbers and decimal point
        isValidInput = regex.test(inputChar);
    }

    // Cancelar el evento si la entrada no es válida
    if (!isValidInput) {
        event.preventDefault();
    }
}


// Función para convertir de CURRENCY1 a CURRENCY2
function convertCurrency1ToCurrency2() {
    var valueCurrency1 = parseFloat(currency1.value);
    if (!isNaN(valueCurrency1)) {
        var conversionRate = 1 / 17.39 // Tasa de conversión de CURRENCY1 a CURRENCY2
        var valueCurrency2 = valueCurrency1 * conversionRate;
        currency2.value = valueCurrency2.toFixed(2);  // Mostrar el resultado en CURRENCY2
    }
}

// Función para convertir de CURRENCY2 a CURRENCY1
function convertCurrency2ToCurrency1() {
    var valueCurrency2 = parseFloat(currency2.value);
    if (!isNaN(valueCurrency2)) {
        var conversionRate = 17.39;  // Tasa de conversión de CURRENCY2 a CURRENCY1
        var valueCurrency1 = valueCurrency2 * conversionRate;
        currency1.value = valueCurrency1.toFixed(2);  // Mostrar el resultado en CURRENCY1
    }
}

// Agregar event listeners para detectar cambios en los campos de entrada
currency1.addEventListener("input", convertCurrency1ToCurrency2);
currency2.addEventListener("input", convertCurrency2ToCurrency1);


function clearForm() {
    currency1.value = '';
    currency2.value = '';
}
