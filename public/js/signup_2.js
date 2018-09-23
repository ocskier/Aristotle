$(document).ready(function() {
//*****  for dropdown menu  *********

  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, options);
  });


  var nameInput = $("input#name-input");
  var emailInput = $("input#email-input");
  var subjectInput = $("input#subject-input");
  var ageGroupInput = $("input#age-input");

  $("#submit").on("click", function(event) {
    event.preventDefault();
    var userDataSignUp = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      subject: subjectInput.val().trim(),
      ageGroup: ageGroupInput.val().trim(),
    };
    // console.log(userDataSignUp);

    signUp(userDataSignUp.name. userDataSignUp.email, userDataSignUp.subject, userDataSignUp.ageGroup);
    nameInput.val("");
    emailInput.val("");
    subjectInput.val("");
    ageGroup.val("");

  });

  function signUp(name, email, subject, ageGroup){
    $.post("api/signup", {
      name: name,
      email: email,
      subject: subject,
      ageGroup: ageGroup
    }).then(function(data){
      console.log(data);
    });
  }


});