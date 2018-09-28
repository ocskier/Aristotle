$(document).ready(function() {
  //*****  for dropdown menu  *********

  // document.addEventListener("DOMContentLoaded", function() {
  //   var elems = document.querySelectorAll("select");
  //   var instances = M.FormSelect.init(elems, options);
  // });

  var nameInput = $("input#name-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var subjectInput = $("#subject-input");
  var ageGroupInput = $("#age-input");
  //collects data on click event
  $("#submit").on("click", function(event) {
    console.log("You have clicked this message");
    event.preventDefault();
    var userDataSignUp = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      subject: subjectInput.val(),
      ageGroup: ageGroupInput.val()
    };
    console.log(userDataSignUp);

    signUp(
      userDataSignUp.name,
      userDataSignUp.email,
      userDataSignUp.password,
      userDataSignUp.subject,
      userDataSignUp.ageGroup
    );
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  function signUp(name, email, password, subject, ageGroup) {
    $.post("api/signup", {
      name: name,
      email: email,
      password: password,
      subject: subject,
      ageGroup: ageGroup
    }).then(function(data) {
      console.log(data);
    });
  }
});
