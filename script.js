$("html").on("click", function () {
  document.getElementById("demo").innerHTML = "bby, I love you, and you're my bestfriend <3";
  $(this).toggleClass("on");
});
setTimeout(function () {
  $("html").addClass("on");
}, 1000);

