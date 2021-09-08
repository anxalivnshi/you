$("html").on("click", function () {
  document.getElementById("demo").innerHTML = "bby > everything";
  $(this).toggleClass("on");
});
setTimeout(function () {
  $("html").addClass("on");
}, 1000);

