$(document).ready(function() {
  var textTitle = $("textarea#text-title");
  var textBody = $("textarea#text-body");
  var textSubject = $("#subject-input-lesson");
  var textAge = $("#age-input-lesson");

  $("#submit-text").on("click", function (event) {
    event.preventDefault();
    var userTextInput = {
      title: textTitle.val().trim(),
      description: textBody.val().trim(),
      subject: textSubject.val(),
      ageGroup: textAge.val()
    };

    console.log(userTextInput);

    submitLesson(
      userTextInput.title,
      userTextInput.description,
      userTextInput.subject,
      userTextInput.ageGroup
    );

    textTitle.val("");
    textBody.val("");
  });

  function submitLesson(title, description, subject, ageGroup) {
    $.post("/api/lesson", {
      title: title,
      description: description,
      subject: subject,
      ageGroup: ageGroup
    }).then(function(data) {
      console.log(data);
    });
  }
});
