var saveButton = $("#modal-save");

saveButton.on("click", function(e) {
  e.preventDefault();

  var savedplanId = $("#matchCard").attr("data-planid");
  // savedDescrip = $("#matchCard .modal-content p").value();
  console.log(savedplanId);

  $.ajax({ url: "/api/user_data", method: "GET" }).then(function(data) {
    var userId = data.id;
    $.post("/api/userPlan/" + userId + "/" + savedplanId, function(data) {
      console.log(data);
    });
  });
});

$(".modal").modal({
  //   onOpenEnd: function() {}
});

$("#lessons-row").on("click", ".active", function() {
  //   var url = $(this).data("url");
  var planId = $(".active").attr("data-planid");
  console.log(planId);
  var cardDescrip = $(".active .card .card-content p").text();
  var cardTitle = $(".active .card .card-content span").text();
  $("#matchCard").attr("data-planid", planId);
  $("#matchCard .modal-content h4").text(cardTitle);
  $("#matchCard .modal-content p").text(cardDescrip);
  var instance = M.Modal.getInstance($("#modal1"));
  instance.open();
});
