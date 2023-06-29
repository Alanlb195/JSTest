$(document).ready(function () {
    $('#carSelect').change(function () {
        var selectedCar = $(this).val();

        var carouselItems = $('.carousel-item');

        carouselItems.removeClass('active');
        carouselItems.each(function () {
            var altText = $(this).find('img').attr('alt');
            if (altText.indexOf(selectedCar) !== -1) {
                $(this).addClass('active');
                return false; // Exit the loop if a matching carousel item is found
            }
        });
    });

    // change the select when change the carrousel
    $('#carouselExampleControls').on('slid.bs.carousel', function () {
        var activeItem = $(this).find('.carousel-item.active');
        var altText = activeItem.find('img').attr('alt');

        $('#carSelect').val(altText);
    });
});