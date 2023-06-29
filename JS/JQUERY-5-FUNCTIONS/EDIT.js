function edit() {
    // Agregar un controlador de evento al botón de editar
$('.table').on('click', '.editar-btn', function () {
    var fila = $(this).closest('tr');
    var editarBtn = fila.find('.editar-btn');
    var guardarBtn = fila.find('.guardar-btn');
    var eliminarBtn = fila.find('.btn.bg-danger');

    // Ocultar botón de eliminar y mostrar botón de guardar
    editarBtn.hide();
    eliminarBtn.hide();
    guardarBtn.show();

    // Convertir los campos de texto en inputs editables
    fila.find('td:not(:last-child):not(:first-child)').each(function () {
        var valorActual = $(this).text();
        $(this).html('<input class="form-control" type="text" value="' + valorActual + '">');
    });
});


// Agregar un controlador de evento al botón de guardar
$('.table').on('click', '.guardar-btn', function () {
    var fila = $(this).closest('tr');
    var editarBtn = fila.find('.editar-btn');
    var guardarBtn = fila.find('.guardar-btn');
    var eliminarBtn = fila.find('.btn.bg-danger');

    // Ocultar botón de guardar y mostrar botón de editar
    guardarBtn.hide();
    editarBtn.show();
    eliminarBtn.show();

    // Obtener los valores actualizados de los inputs
    var nuevosValores = {};
    fila.find('td:not(:last-child)').each(function (index) {
        var valorActualizado = $(this).find('input').val();
        nuevosValores[index] = valorActualizado;
        $(this).text(valorActualizado);
    });

    // Realizar la solicitud PUT al endpoint correspondiente al usuario
    var userId = fila.find('td:first-child').text();
    $.ajax({
        url: API + '/' + userId,
        method: 'PUT',
        data: nuevosValores,
        success: function (data, textStatus, jqXHR) {
            console.log('Se actualizó el usuario: ' + userId);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error al actualizar el usuario ', userId);
        }
    });
});
}