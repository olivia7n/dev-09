$(function () {
  $("#textInputId").on("keyup", function (e) {
    e.preventDefault();

    var getInput = $("#textInputId").val();

    if (getInput) {
      //  $("#textInputId").val("");
      $("#someOtherDivId").html(
        '<button class="btn-secondary">' + getInput + "</button>"
      );
    } else {
      //  window.alert("type in input box plz");
    }
  });
});