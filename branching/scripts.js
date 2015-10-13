$(document).ready(function() {
  $("form#liberal").submit(function(event) {
    var age = parseInt(prompt("How old are you"));
    if (over50) {
      $('#over50').show();
    } else {
      $('#under50').show();
    }

    var gender = $("select#gender").val();
    var recycle = $("select#recycle").val();
    var separation = $("select#separation").val();
    var government = $("select#government").val();

    $("#party").text(answer);
    $("#answer").show();

    event.preventDefault();

  });

});
