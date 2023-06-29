$(document).ready(function () {
    $('#tablaForm').submit(function (event) {
        event.preventDefault();

        var col1 = $('#col1').val();
        var col2 = $('#col2').val();
        var col3 = $('#col3').val();

        // Clean the table
        $('#tabla tbody').empty();

        // Add Subtitles
        $('#col1Header').text(col1);
        $('#col2Header').text(col2);
        $('#col3Header').text(col3);

        // Get the number of rows
        var numRows = parseInt(prompt('Ingrese el número de filas:'));

        // Create Rows
        for (var i = 0; i < numRows; i++) {
            var row = $('<tr></tr>');
            var col1Input = $('<td class="col1" contenteditable="true"></td>');
            var col2Input = $('<td class="col2" contenteditable="true"></td>');
            var col3Input = $('<td class="col3" contenteditable="true"></td>');
            var col4 = $('<td class="col4"></td>');

            col1Input.on('input', function () {
                updateRow($(this).closest('tr'));
            });

            col2Input.on('input', function () {
                updateRow($(this).closest('tr'));
            });

            col3Input.on('input', function () {
                updateRow($(this).closest('tr'));
            });

            function updateRow(row) {
                var col1Value = parseFloat(row.find('.col1').text()) || 0;
                var col2Value = parseFloat(row.find('.col2').text()) || 0;
                var col3Value = parseFloat(row.find('.col3').text()) || 0;

                var sum = col1Value + col2Value + col3Value;
                row.find('.col4').text(sum.toFixed(2));

                if (sum < 0) {
                    row.find('.col4').addClass('negative').removeClass('positive');
                } else {
                    row.find('.col4').addClass('positive').removeClass('negative');
                }

                if (col3Value < 0) {
                    row.find('.col3').prop('contenteditable', false).off('input');
                } else {
                    row.find('.col3').prop('contenteditable', true).on('input', function () {
                        updateRow(row);
                    });
                }
            }

            col1Input.appendTo(row);
            col2Input.appendTo(row);
            col3Input.appendTo(row);
            col4.appendTo(row);
            row.appendTo('#tabla');
        }
    });

    $('#limpiar').click(function () {
        $('#tablaForm')[0].reset();
        $('#tabla tbody').empty();
        $('#col1Header').text('');
        $('#col2Header').text('');
        $('#col3Header').text('');
    });
});