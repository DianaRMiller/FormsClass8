$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fruitInput = $("input#fruit").val();
    var vegetableInput = $("input#person2").val();
    var herbivoreInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var badVerbInput = $("input#bad-verb").val();

    $(".fruit").append("blah blah");
    $(".vegetable").append("blah blah");
    $(".herbivore").append("blah blah");
    $(".exclamation").append("blah blah");
    $(".verb").append("blah blah");
    $(".noun").append("blah blah");
    $(".badVerb").append("blah blah");

    $("#story").show();

    event.preventDefault();

  });
});
