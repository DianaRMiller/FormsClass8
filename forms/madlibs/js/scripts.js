$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fruitInput = $("input#fruit").val();
    var vegetableInput = $("input#vegetable").val();
    var herbivoreInput = $("input#herbivore").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var badVerbInput = $("input#bad-verb").val();

    $(".fruit").text(fruitInput);
    $(".vegetable").text(vegetableInput);
    $(".herbivore").text(herbivoreInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".badVerb").text(badVerbInput);

    $("#story").show();

    event.preventDefault();

  });
});
