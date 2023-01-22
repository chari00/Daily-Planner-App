// Display the current day at the top of the calender when a user opens the planner.
$("#currentDay").text(moment().format("dddd, MMMM Do "));
//create an element( hours)
let hours = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
let $timeBlock = $("<.container>");

let $currentTime = moment().format("hA");
let isbefore = moment().isBefore($currentTime);
let isafter = moment().isAfter($currentTime);
let $row = $(".row");

buildPlanner();
function buildPlanner() {
  // Present timeblocks for standard business hours when the user scrolls down.
  for (let i = 0; i < hours.length; i++) {
    // let hour = hours[i];
    // let $currentTime = $("<div>");
    let $currentTime = $(".row");
    let $eventInput = $("textarea");
    $currentTime.text(hours[i]);
    $currentTime.attr("class", "row");
    $eventInput.text("data-time", "$(#hour)");
    $eventInput.attr("data-time", "$(#hour)");
    $currentTime.addClass("col-2 ");
    $(".container").append($(".row"));
    $(".row").append($("#hour").text(), $("textarea").val());

    // $("#hour").val().append($("textarea").text());
    // $currentTime.attr("data-time", hour[i]);
  }
}
// console.log($(".hour"));
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
rowColor();
function rowColor() {
  let $eventTime = $("#hour");
  if (($eventTime, (isbefore = true))) {
    $row = $(".row").attr("class", ".past");
  } else {
    if (($eventTime, (isafter = true))) {
      $row = $(".row").attr("class", ".future");
    } else {
      $row = $(".row").attr("class", "present");
    }
  }
}
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").on("click", function (event) {
  // event.preventDefault();
  $(".container").append($(".row").val());
  $(".row").append($("#hour").val());

  let $eventTextInput = $("textarea").text();
  let $eventTime = $("#hour").val();
  localStorage.setItem("Event Input", $eventTextInput);
  localStorage.setItem("Event Time", $eventTime);
});

// Persist events between refreshes of a page
