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
  var item = items[Math.floor(Math.random() * items.length)];
  $target.html(
    "<h4 id='my' class='text-center'>" + item + "</h4><p id='para'>"
  );
}

var items = Array(
  "https://www.youtube.com/watch?v=l4UkYBr1NnA&ab_channel=Fredagain..",
  "https://youtu.be/G04fG-4JcrI"
);
