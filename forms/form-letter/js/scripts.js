$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var inputEmail3Input = $("input#inputEmail3").val();
    var inputPassword3Input = $("input#inputPassword3").val();
    var checkboxInput = $("input#checkbox").val();
    var orderIDInput = $("input#orderID").val();
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var coffeeInput = $("select#coffee").val();
    var quantityInput = $("select#Quantity").val();
    var shippingAddressInput = $("textarea#shippingAddress").val();
    var phoneInput = $("input#phone").val();



    console.log(inputEmail3Input);

    $(".inputEmail3").text(inputEmail3Input);
    $(".inputPassword3").text(inputPassword3Input);
    $(".checkbox").text(checkboxInput);
    $(".orderID").text(orderIDInput);
    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".coffee").text(coffeeInput);
    $(".Quantity").text(quantityInput);
    $(".shippingAddress").text(shippingAddressInput);
    $(".phone").text(phoneInput);

    $("#receipt").show();

    event.preventDefault();

    // $("#blanks").hide();

  });
});
