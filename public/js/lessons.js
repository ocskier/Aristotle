function runLessonsQuery() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/members/lessons", method: "GET" }).then(function(data) {
    // Here we then log the tableData to console, where it will show up as an object.
    console.log(data);
    console.log("------------------------------------");

    // Loop through and display each of the customers
    for (var i = 0; i < data.length; i++) {
      // Get a reference to the tableList element and populate it with tables
      var lessonsList = $("#lessons-row");

      var newCardA = $(
        '<a class="carousel-item" href="" target="blank" style="width:310px;"></a>'
      );
      newCardA
        .append(
          $(
            '<img src="https://images.unsplash.com/photo-1528459199957-0ff28496a7f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a17975ae0832c15daee9763fe6ad9892&auto=format&fit=crop&w=682&q=80" alt="Portfolio Pic">'
          )
        )
        .append($('<p class="ctr-txt white-text">Lesson Plan</p>')); //data[i].text
      lessonsList.append(newCardA);
    }
  });
}

var newLesson="";
$.post("/api/userPlan", newLesson,function(data) {
  console.log(data);
});

$(".modal").modal({
  //   onOpenEnd: function() {}
});

runLessonsQuery();

$("#lessons-row").on("click", ".active", function() {
  //   var url = $(this).data("url");
  var cardText = $(".active .card p").text();
  $("#matchCard .modal-content p").text(cardText);
  var instance = M.Modal.getInstance($("#modal1"));
  instance.open();
});