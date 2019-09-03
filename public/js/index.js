// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  var artistForm = $("artistForm");
  var artistInput = $("#artistName");
  var countryInput = $("#country");
  var ageInput = $("#age");
  $("#btn_submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newArtist = {
      artistName: artistInput.val(),
      country: countryInput.val(),
      age: ageInput.val()
    };
    console.log(newArtist);
    $.ajax("/api/post", {
      type: "POST",
      data: newArtist
    }).then(
      function () {
        console.log("created new artist");
        // Reload the page to get the updated list
        location.reload();
      }
    )
  });
});