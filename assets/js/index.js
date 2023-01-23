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
// let $timeBlock = $("<.container>");

let $present = moment().format("HH:MM");
let $row = $(".row");

buildPlanner();
function buildPlanner() {
  // Present timeblocks for standard business hours when the user scrolls down.
  for (let i = 0; i < hours.length; i++) {
    $(".container").append(`<div class="row">
    <div class="col-2" id="hour">${hours[i]}</div>
    <textarea class="col-8" ${(data = "")}></textarea>
    <button class="col-2 saveBtn">Save</button>
  </div>`);
  }
}
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

rowColor();
let $hourIndex = JSON.stringify(hours);
function rowColor($hourIndex) {
  if ($hourIndex < $present) {
    $row = $(".row").addClass("past");
  } else {
    if ($hourIndex > $present) {
      $row = $(".row").addClass("future");
    } else {
      $row = $(".row").addClass("present");
    }
  }
}
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").on("click", function (event) {
  let $eventTextInput = $("textarea").val();
  let $eventTime = $("#hour").data();
  localStorage.setItem("Event ", $eventTextInput);
  localStorage.setItem("Event Time", $eventTime);
});

// Persist events between refreshes of a page
function persistEvent(localStorage) {
  localStorage.getItem($("textarea").val);
}
