import './JQUERY-5-FUNCTIONS';

var API = 'https://jsonplaceholder.typicode.com/users';
$.ajax({
    url: API,
    method: 'GET',
    success: function (data, textStatus, jqXHR) {

        // Por cada dato dentro de data se crea una fila
        data.forEach(function (item) {
            var id = item.id
            var nombre = item.name;
            var edad = item.username;
            var phone = item.phone;
            var direccion = "Street: " + item.address.street +
                " Suite: " + item.address.suite +
                " City: " + item.address.city;

            // Crear una nueva fila de la tabla con los datos
            var fila = '<tr style="font-size: 14px;">' +
                '<td>' + id + '</td>' +
                '<td>' + nombre + '</td>' +
                '<td>' + edad + '</td>' +
                '<td>' + phone + '</td>' +
                '<td>' + direccion + '</td>' +
                '<td style="display: flex; gap: 0px 5px; ">' +
                '<button class="btn bg-primary editar-btn" style="color: white;">Editar</button>' +
                '<button class="btn bg-primary guardar-btn" style="color: white; display: none;">Guardar</button>' +
                '<button class="btn bg-danger" style="color: white;">Eliminar</button>' +
                '</td>' +
                '</tr>';

            // Agregar la nueva fila a la tabla
            $('.table tbody').append(fila);
        });

    }
});
