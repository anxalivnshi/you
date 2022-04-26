$(document).ready(function () {
  $("#Message").on("click", function () {
    $("#target").fadeToggle(500).fadeToggle(500);
    //  $(".message").html("Here is the message ");
  });
});

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
      showText(target, message, index, interval);
    }, interval);
  }
};

$(function () {
  showText("#target1", "-by ihbagsh karen karenovskii", 0, 200);
});

$("button").click(function () {
  randomSong();
});

function randomSong() {
  var $target = $("#target");
  var random = Math.floor(Math.random() * items.length);
  var item = items[random];
  var word = words[random];
  $target.html(
    "<h4 id='my' class='text-center'>" +
      `<a href=${item}>` +
      { word } +
      "</a>" +
      "</h4><p id='para'>"
  );
}

var items = Array(
  "https://www.youtube.com/watch?v=prR9YVj2Ip8",
  "https://www.youtube.com/watch?v=aQ0NazSOm1I",
  "https://www.youtube.com/watch?v=CUti779W2WY",
  "https://www.youtube.com/watch?v=XxUte-68eUQ",
  "https://www.youtube.com/watch?v=LlVri87Vc3I",
  "https://www.youtube.com/watch?v=XDF1ysVRqWM",
  "https://www.youtube.com/watch?v=eVHV9mXSmYA",
  "https://www.youtube.com/watch?v=vEjszeleo_g",
  "https://www.youtube.com/watch?v=RhV2b_MTveM"
);
var words = Array(
  "spill tab - calvaire",
  "Easy Life - Sangria",
  "Kazy Lambist - Annecy",
  "Metronomy - The Light",
  "Yasminah (See Your Face Again)",
  "BAYNK - Simmer",
  "Hadji Gaviota - RUNNER'S HIGH",
  "Solstice - Yeek",
  "K. Roosevelt - Blinding My Vision"
);
