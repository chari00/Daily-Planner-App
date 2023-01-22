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

let $now = moment().format("hh:mm");
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
// console.log($(".hour"));
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// $(".row").each(function (index, element) {
//   var $element = $(element);
//   var hour = $element.data("hour");
//   if (hour === currentHour) {
//     $element.css("background-color", "red");
//   } else {
//     $element.css("background-color", "blue");
//   }
// });

rowColor();
function rowColor() {
  let $hourIndex = hours;
  // let $eventTime = $("#hour");

  if ($hourIndex < $now) {
    $row = $(".row").addClass("past");
  } else {
    if ($hourIndex > $now) {
      $row = $(".row").addClass("future");
    } else {
      $row = $(".row").addClass("present");
    }
  }
}
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").on("click", function (event) {
  // event.preventDefault();
  // $(".container").append($(".row").text());
  // $(".row").append($("#hour").val());

  let $eventTextInput = $("textarea").val();
  let $eventTime = $("#hour").data();
  localStorage.setItem("Event Input", $eventTextInput);
  localStorage.setItem("Event Time", $eventTime);
});

// Persist events between refreshes of a page
