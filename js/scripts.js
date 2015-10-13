$(document).ready(function() {
  var over18 = confirm("Are you over 18? Click OK for yes or Cancel for no.");

  if (over18) {
    $('#over18').show();
  } else {
    $('#under18').show();
  }
});
