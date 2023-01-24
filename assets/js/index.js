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
    <div class="col-2" id="hour-${hours[i]}">${hours[i]}</div>
    <textarea class="col-8" data = ""></textarea>
    <button class="col-2 saveBtn">Save</button>
    </div>`);
  }
}
// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// let $hourIndex = Number(hours);
function rowColor() {
  for (j = 0; j < hours.length; j++) {
    // console.log(j);

    if (JSON.stringify(hours[j]) < JSON.stringify($present)) {
      $row = $(".row").addClass("past");
    }
    if (JSON.stringify(hours[j]) > JSON.stringify($present)) {
      $row = $(".row").addClass("future");
    }
    $row = $(".row").addClass("present");
  }
}

rowColor();
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.

// let $eventTextInput = JSON.stringify($("textarea").val());
//let $eventTime = $("#hour").val();
// let $eventTime = moment($("hour")).format("HH:MM");
// let $eventTime = moment($("#hour").toString()).format("HH:MM");
// console.log($eventTime + "  " + $eventTextInput);
$(".saveBtn").on("click", function () {
  let $eventTime = $(".saveBtn").parent().attr("#hour");
  let $eventTextInput = $(".saveBtn").siblings($("textarea"));
  localStorage.setItem(`Event  `, $eventTextInput);
  localStorage.setItem("Event Time", $eventTime);
});

// Persist events between refreshes of a page
function persistEvent(localStorage) {
  localStorage.getItem($eventTextInput.val() + $eventTime.val());
}
