$("html").on("click", function () {
  document.getElementById("demo").innerHTML = "you > everything";
  $(this).toggleClass("on");
});
setTimeout(function () {
  $("html").addClass("on");
}, 1000);

