$(document).ready(function() {

  var textTitle = $("input#text-title");
  var textBody = $("input#text-body");

  $("#submit-text").on("click", function(event) {
    event.preventDefault();
    var userTextInput= {
      title: textTitle.val().trim(),
      body: textBody.val().trim(),
    };

    console.log(userTextInput);

    submitLesson(
      userTextInput.title,
      userTextInput.body
    );

    textTitle.val("");
    textBody.val("");
  });

  function submitLesson(title, body) {
    $.post("api/*****", {
      title: title,
      body: body
    }).then(function(data) {
      console.log(data);
    });
  }
});