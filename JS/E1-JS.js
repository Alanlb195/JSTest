const form = document.getElementById('myForm');
const nombreCompletoElement = document.getElementById('nombreCompleto');
const edadElement = document.getElementById('edad');
const observacionesElement = document.getElementById('observaciones');
const observacionesCounterElement = document.getElementById('observacionesCounter');
const resultSection = document.getElementById('result');
const printButton = document.getElementById('printButton');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        showResult();
    }
});

observacionesElement.addEventListener('input', updateObservacionesCounter);

function validateForm() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

    if (nombre.includes('  ') || apellidos.includes('  ')) {
        alert('El nombre y apellidos no pueden tener espacios dobles.');
        return false;
    }

    if (!validateEmail(correo)) {
        alert('Correo inválido.');
        return false;
    }

    if (!validateDate(fechaNacimiento)) {
        alert('Fecha de nacimiento inválida.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function validateDate(dateString) {
    var today = new Date(); // fecha actual
    var birthDate = new Date(dateString); // fecha de nacimiento del usuario

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var d = today.getDate() - birthDate.getDate();

    // Comprobar si la fecha de nacimiento aún no ha ocurrido este año
    if (m < 0 || (m === 0 && d < 0)) {
        age--;
    }

    // Comprobar si la edad es mayor o igual a 100 o menor que 1
    if (age >= 100 || age < 1) {
        return false;
    }

    return true;
}


function updateObservacionesCounter() {
    const maxLength = parseInt(observacionesElement.getAttribute('maxlength'));
    const currentLength = observacionesElement.value.length;
    const remainingLength = maxLength - currentLength;
    observacionesCounterElement.textContent = `${remainingLength} caracteres restantes`;
}

function showResult() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const observaciones = document.getElementById('observaciones').value;

    const nombreCompleto = `${nombre} ${apellidos}`;
    const edad = calculateAge(fechaNacimiento);

    nombreCompletoElement.textContent = nombreCompleto;
    edadElement.textContent = edad;

    resultSection.style.display = 'block';
    printButton.style.display = 'block';
}

function calculateAge(date) {
    const birthDate = new Date(date);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

printButton.addEventListener('click', function () {
    window.print();
});