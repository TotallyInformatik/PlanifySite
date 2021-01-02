$(function() {
  $(window).on("scroll", function() {
    let relation = $(this).scrollTop() / $("body").innerHeight();

    $("header nav").css("top", "calc(" + relation * 100 + "vh - 80px)");
  });
});