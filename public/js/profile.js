$(document).ready(function () {

  var textTitle = $("input#text-title");
  var textBody = $("input#text-body");
  var textSubject = $("#subject-input-lesson");
  var textAge = $("#age-input-lesson");

  $("#submit-text").on("click", function (event) {
    event.preventDefault();
    var userTextInput = {
      title: textTitle.val().trim(),
      body: textBody.val().trim(),
      subject: textSubject.val(),
      ageGroup: textAge.val()
    };

    console.log(userTextInput);

    submitLesson(
      userTextInput.title,
      userTextInput.body,
      userTextInput.subject,
      userTextInput.ageGroup
    );

    textTitle.val("");
    textBody.val("");
  });

  function submitLesson(title, body) {
    $.post("api/lesson", {
      title: title,
      body: body,
      subject: subject,
      ageGroup: ageGroup
    }).then(function (data) {
      console.log(data);
    });
  }
});