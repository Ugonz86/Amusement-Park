$(document).ready(function () {
  var usersHeight = parseInt(prompt("Please enter your height in inches: "));
  if (usersHeight < 36) {
    $("#ferris-id").removeClass();
  }
  if (usersHeight >= 36) {
    $("#ferris-id").removeClass();
    $("#roller-id").removeClass();
  }
  if (usersHeight >= 48) {
    $("#ferris-id").removeClass();
    $("#roller-id").removeClass();
    $("#tower-id").removeClass();
  }
});
