function formatPhoneNumber(home, mobile) {
    return `Teléfono: ${home || 'N/A'} y cel: ${mobile || 'N/A'}`;
}

function formatDate(date) {
    const parts = date.split(' ')[0].split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${day}/${month}/${year}`;
}

function calculateAge(birthday) {
    const parts = birthday.split(' ')[0].split('/');
    const birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function createTable(data) {
    const tableBody = document.querySelector('#employeeTable tbody');

    data.sort((a, b) => {
        const ageA = calculateAge(a.birthday);
        const ageB = calculateAge(b.birthday);
        return ageA - ageB;
    });

    data.forEach((employee) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.IDEmployee}</td>
            <td>${employee.firstName} ${employee.lastName}</td>
            <td>${employee.Salary}</td>
            <td>${employee.address}</td>
            <td>${formatDate(employee.birthday)}</td>
            <td>${employee.email}</td>
            <td>${formatPhoneNumber(employee.phHome, employee.phMobile)}</td>
        `;
        tableBody.appendChild(row);
    });
}

function convertToJSON(text) {
    const lines = text.split('\n');
    const headers = lines[0].split(',');
    const jsonData = [];

    for (let i = 1; i < lines.length; i++) {
        const currentLine = lines[i].split(',');

        const employee = {};
        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            const value = currentLine[j];
            employee[header] = value;
        }

        jsonData.push(employee);
    }

    return jsonData;
}

function loadFile() {
    const fileUrl = './txt/Ejercicio4_jquery.txt';

    fetch(fileUrl)
        .then(response => response.text())
        .then(text => {
            const jsonData = convertToJSON(text);
            createTable(jsonData);
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
        });
}

loadFile();
