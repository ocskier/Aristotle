function runLessonsQuery() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/user_data", method: "GET" }).then(function(data) {
    var subject = "math";
    var ageGroup = "Elementary";

    $.ajax({ url: "/api/" + ageGroup + "/" + subject, method: "GET" }).then(
      function(data) {
        // Here we then log the tableData to console, where it will show up as an object.
        console.log(data);
        console.log("------------------------------------");
        console.log(2);
        // Loop through and display each of the customers
        for (var i = 0; i < 10; i++) {
          // Get a reference to the tableList element and populate it with tables
          console.log(data[i]);
          var lessonsList = $("#lessons-row");

          var newCarouselA = $(
            '<a class="carousel-item" href="#'+(i+1)+'!" style="width:240px;"></a>'
          );
          var newCardDiv = $('<div class="card blue-grey darken-1">');
          var newCardContentDiv = $('<div class="card-content white-text">');
          newCardContentDiv.append(
            $('<span class="card-title">' + data[0].title + "</span>"),
            $("<p>" + data[0].description + "</p>")
          );
          newCardDiv.append(newCardContentDiv);
          newCarouselA.append(newCardDiv);
          lessonsList.append(newCarouselA);
        }
      }
    );
  });
}

var saveButton = $("#modal-save");

saveButton.on("click", function(e) {
  e.preventDefault();
  var newLesson = {};
  $.post("/api/userPlan", function(data) {
    console.log(data);
  });
});

$(".modal").modal({
  //   onOpenEnd: function() {}
});

runLessonsQuery();

$("#lessons-row").on("click", ".active", function() {
  //   var url = $(this).data("url");
  var cardDescrip = $(".active .card .card-content p").text();
  var cardTitle = $(".active .card .card-content span").text();
  $("#matchCard .modal-content h4").text(cardTitle);
  $("#matchCard .modal-content p").text(cardDescrip);
  var instance = M.Modal.getInstance($("#modal1"));
  instance.open();
});
