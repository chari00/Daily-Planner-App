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
let $currentEvent = {};
let $hoursOfDay = $("<.container>");

// Display the current day at the top of the calender when a user opens the planner.
let $currentHour = moment().format("hA");

renderEvent();
function renderEvent() {
  // Present timeblocks for standard business hours when the user scrolls down.
  for (let i = 0; i < hours.length; i++) {
    let hour = hours[i];
    let $currentTime = $(".row");
    $currentTime.attr("date-time", hour);
  }
}

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Allow a user to enter an event when they click a timeblock

// Save the event in local storage when the save button is clicked in that timeblock.

$(".saveBtn").on("click", function (event) {
  $(".container").append($(".row").val());

  let eventInput = $("textarea").val();
  localStorage.setItem("Event Input", eventInput);
});

// Persist events between refreshes of a page
