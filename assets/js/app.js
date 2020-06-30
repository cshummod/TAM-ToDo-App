$(document).ready(function () {
  // Sidebar
  // hide expand sidebar button on load
  $("#expandSidebarBtn").hide();

  $("#collapseSidebarBtn").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#expandSidebarBtn").show();
  });

  $("#expandSidebarBtn").click(function () {
    $("#sidebar").toggleClass("active");
    $(this).hide();
  });

  $(window).on("resize", function () {
    if ($(window).width() < 768) {
      $("#expandSidebarBtn").show();
    }
  });

  // Drag and drop
  // Initiate Jquery dragndrop plugin
  $(".dragndrop").dragndrop();

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
});
