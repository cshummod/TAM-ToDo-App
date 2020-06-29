$(document).ready(function () {
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

  // Initiate Jquery dragndrop plugin
  $(".dragndrop").dragndrop();

  if ($("#dTask1:checked")) {
    $("#dTask1").next().css({
      "text-decoration": "line-through",
      opacity: ".5",
    });
  }

  $("input[type=checkbox]").change(function () {
    let label = $(this).next();
    this.checked
      ? label.css({
          "text-decoration": "line-through",
          opacity: ".5",
        })
      : label.css({
          "text-decoration": "none",
          opacity: "1",
        });
  });
});
