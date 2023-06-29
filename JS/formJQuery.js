//Years of experience
const title = $("#experience");

$(document).ready(function () {
    const yearsOfExperience = $("#yearsOfExperience");

    yearsOfExperience.on("input", howManyYears);

    function howManyYears() {
        const years = parseInt(yearsOfExperience.val());

        title.show();

        if (years <= 2) {
            title.text("JUNIOR");
            title.value = "JUNIOR"
        } else if (years <= 4) {
            title.text("MASTER");
            title.value = "MASTER"
        } else if (years > 4) {
            title.text("SENIOR");
            title.value("SENIOR");
        }
    }
});


// Male by default
$(document).ready(function () {
    $("#male").show();
});


// Change gender
$(document).ready(function () {
    var male = $("#male");
    var female = $("#female");
    var selectGender = $("#gender");

    selectGender.on("change", changeImage);

    function changeImage() {
        var formatGender = selectGender.val().toLowerCase();

        if (formatGender == 'masculino') {
            male.show();
            female.hide();
        } else if (formatGender == 'femenino') {
            female.show();
            male.hide();
        }
    }
});

$(document).ready(function () {
    $("#send").click(function (event) {
        event.preventDefault();
        var formValid = true;

        // Verify empty fields
        $("input[type='text'], input[type='number']").each(function () {
            if ($(this).val() === "") {
                $(this).addClass("error");
                $(this).siblings("label").find("span").show();
                formValid = false;
            } else {
                $(this).removeClass("error");
                $(this).siblings("label").find("span").hide();
            }
        });

        // Select the first field with invalid data
        var firstErrorField = $("input.error, select.error").first();
        if (firstErrorField.length > 0) {
            firstErrorField.focus();
        }

        // Send the form if it's valid
        if (formValid) {
            // Hide all the Form
            $("#myForm").hide();

            // Get all the Data of the form
            var firstName = $("#first-name").val();
            var lastName = $("#last-name").val();
            var address = $("#address").val();
            var birthPlace = $("#birth-place").val();
            var yearsOfExperience = $("#yearsOfExperience").val();
            var languages = $("#lenguages").val();
            var gender = $('#gender').val();

            // Show all the data
            var welcomeMessage = "Bienvenidos";
            var infoMessage = "Nombre: " + firstName + "<br>" +
                "Apellido: " + lastName + "<br>" +
                "Dirección: " + address + "<br>" +
                "Sexualidad: " + gender + "<br>" +
                "Lugar de nacimiento: " + birthPlace + "<br>" +
                "Años de experiencia: " + yearsOfExperience + " Nivel: " + title.value + "<br>" +
                "Lenguajes que domina: " + languages + "<br>";

            $("#myForm").before("<h1>" + welcomeMessage + "</h1>");
            $("#myForm").before("<p>" + infoMessage + "</p>");
        }
    });
});