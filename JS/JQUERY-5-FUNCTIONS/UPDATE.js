// Agregar un controlador de evento al botón de eliminar
$('.table').on('click', '.btn.bg-danger', function () {
    var fila = $(this).closest('tr');
    var userId = fila.find('td:first-child').text();

    // Mostrar confirmación antes de eliminar el usuario
    var confirmacion = confirm("¿Estás seguro de que deseas eliminar al usuario " + userId + "?");

    if (confirmacion) {
        // Realizar la solicitud DELETE al endpoint correspondiente al usuario
        $.ajax({
            url: API + '/' + userId,
            method: 'DELETE',
            success: function (data, textStatus, jqXHR) {
                // Eliminar la fila de la tabla después de eliminar el usuario
                console.log('Se eliminó a el usuario ' + userId)
                fila.remove();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error al eliminar el usuario:', userId);
            }
        });
    }
});