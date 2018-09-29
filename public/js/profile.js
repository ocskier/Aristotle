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
      grade: ageGroup
    }).then(function(data) {
      console.log(data);
    });
  }
  
  $.ajax({ url: "/api/userPlan", method: "GET" }).then(function(data) {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      var newLi = $('<li class="collection-item avatar">');
      newLi.append(
      $('<i class="material-icons circle">folder</i>'),
      $('<span class="title">'+data[i].title+'</span>'),
      $(' <p>'+data[i].description+'</p>'),
      $('<a href="#modal1" class="secondary-content modal-trigger" data-target="modal1"><i class="material-icons">grade</i></a>')
      );
      $('#savedLessonsRow').append(newLi);
    }  
  });
});
