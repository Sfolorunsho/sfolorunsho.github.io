$(document).ready(function () {
    $('#option1').click(function () {
        if ($(this).is(':checked')) {
          var dropDownVal = $('#option1').val();
$("#dropval").text("Thank-you for donating "+dropDownVal+" We will contact you shortly about your donation")
        }
    });

    $('#option2').click(function () {
        if ($(this).is(':checked')) {
          var dropDownVal = $('#option2').val();
          $("#dropval").text("Thank-you for donating "+dropDownVal+" We will contact you shortly about your donation")
    }});

    $("#option3").click(function () {
        if ($(this).is(':checked')) {
          var dropDownVal = $("#option3").val();
          $("#dropval").text("Thank-you for donating "+ dropDownVal +" We will contact you shortly about your donation")
    }});

    $('#option4').click(function () {
        if ($(this).is(':checked')) {
          var dropDownVal = $('#option4').val();
          $("#dropval").text("Thank-you for donating "+dropDownVal+" We will contact you shortly about your donation")
    }});

    $('#option5').click(function () {
        if ($(this).is(':checked')) {
          var dropDownVal = $('#option5').val();
          $("#dropval").text("Thank-you for donating "+dropDownVal+" We will contact you shortly about your donation")
    }});
});
