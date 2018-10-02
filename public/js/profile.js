$(document).ready(function() {
  var textTitle = $("textarea#text-title");
  var textBody = $("textarea#text-body");
  var textSubject = $("#subject-input-lesson");
  var textAge = $("#age-input-lesson");

  $("#submit-text").on("click", function(event) {
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

  $("#submit-change-text").on("click", function(event) {
    event.preventDefault();

    var newSubject = $("#change-subj-field").val();
    var newAgeGroup = $("#change-grade-field").val();

    $.ajax({ url: "/api/user_data", method: "GET" }).then(function(data) {
      var userId = data.id;
      var newUserParams = {
        subject: newSubject,
        grade: newAgeGroup
      };
      console.log(newUserParams);
      $.ajax("/api/users/" + userId, { type: "PUT", data: newUserParams })
        .then(function(data) {
          console.log(data);
          window.location.replace(data);
          // res.redirect(data);
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  });

  $("#savedLessonsRow").on("click", ".lesson", function() {
    //   var url = $(this).data("url");
    var lessonId = $(this).attr("id");
    var cardTitle = $("#" + lessonId + " span").text();
    var cardDescrip = $("#" + lessonId + " p").text();
    $("#matchCard .modal-content h4").text(cardTitle);
    $("#matchCard .modal-content p").text(cardDescrip);
    var instance = M.Modal.getInstance($("#modal1"));
    instance.open();
  });

  function submitLesson(title, description, subject, ageGroup) {
    $.post("/api/lesson", {
      title: title,
      description: description,
      subject: subject,
      grade: ageGroup
    }).then(function(data) {
      console.log(data);
    });
  }
});
