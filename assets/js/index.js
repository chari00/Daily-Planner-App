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

let $present = 12; // moment().format("HH");
let $row = $(".row");

buildPlanner();
function buildPlanner() {
  // Present timeblocks for standard business hours when the user scrolls down.
  for (let i = 0; i < hours.length; i++) {
    $(".container").append(`<div class="row">
    <div class="col-2" id="hour-${hours[i]}">${hours[i]}</div>
    <textarea class="col-8" data = ""></textarea>
    <button class="col-2 saveBtn">Save</button>
    </div>`);
  }
}
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

function rowColor() {
  for (j = 0; j < hours.length; j++) {
    console.log(parseInt(hours[j]));
    if (parseInt(hours[j]) < parseInt($present)) {
      $row = $(".row").eq(j).addClass("past");
    } else if (parseInt(hours[j]) > parseInt($present)) {
      $row = $(".row").eq(j).addClass("future");
    } else if (parseInt(hours[j]) === parseInt($present))
      $row = $(".row").eq(j).addClass("present");
  }
}

rowColor();
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").on("click", function () {
  let $eventTime = $(this).siblings("div").attr("id");
  let $eventTextInput = $(this).siblings("textarea").val();
  localStorage.setItem($eventTime, $eventTextInput);
});

// Persist events between refreshes of a page
function persistEvent() {
  $("textarea").val(localStorage.getItem(`${hour}`));
}

persistEvent();
