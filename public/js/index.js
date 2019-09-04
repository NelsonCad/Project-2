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

  $("#file").on("change", function () {
    readURL(this);
  });
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#img").attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#btn_upload").click(function (event) {
    // event.preventDefault();
    console.log("Testing");
    var file = $("#file").prop("files")[0];
    var fd = new FormData();
    fd.append("file", file);
    fd.append("name", $("#name").val())
    fd.append("description", $("#description").val())
    $.ajax({
      url: "/api/upload",
      type: "post",
      data: fd,
      contentType: false,
      processData: false
    }).done(function (res) {
      console.log("Testing");
      location.reload();
    });
  });
});