$(document).ready(function () {
  // Sidebar
  // hide expand sidebar button on load
  if ($(window).width() > 768) {
    $("#expandSidebarBtn").hide();
  }

  $("#collapseSidebarBtn").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#expandSidebarBtn").show();
  });

  $("#expandSidebarBtn").click(function () {
    $("#sidebar").toggleClass("active");
    $(this).hide();
  });

  $(window).on("resize", function () {
    $(window).width() < 768
      ? $("#expandSidebarBtn").show()
      : $("#expandSidebarBtn").hide();
  });

  // Drag and drop
  // Initiate Jquery SortableJS plugins
  $('.dragndrop').sortable();

  // Search box
  $("#search").keyup(function () {
    $(".task label").each(function () {
      $(this).text().indexOf($("#search").val()) != -1
        ? $(this).parent().show()
        : $(this).parent().hide();
    });
  });

  // Tasks checkboxes
  if ($("#dTask1:checked")) {
    $("#dTask1").next().css({
      "text-decoration": "line-through",
      color: "rgba(102, 102, 102, 0.5)",
    });
  }

  $("input[type=checkbox]").change(function () {
    let label = $(this).next();
    this.checked
      ? label.css({
          "text-decoration": "line-through",
          color: "rgba(102, 102, 102, 0.5)",
        })
      : label.css({
          "text-decoration": "none",
          color: "rgba(102, 102, 102, 1)",
        });
  });

  // Extra: Append all tasks to task list
  // $(".task label").each(function () {
  //   $("#taskSelect").append(new Option($(this).text()));
  // });
});
