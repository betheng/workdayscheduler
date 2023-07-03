// Pulls current date using moment.js linked in index.html
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// Jquery call to verify page is loaded before running function
$(document).ready(function () {

// Listener for click event on save button and then saves text entry and current time to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
// Checks current time block
        var timeNow = moment().hour();

// TODO comment from starter code: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// THIS ISN't WORKING!!! DEBUG WHEN I CONTINUE LATER
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
              if (blockTime < timeNow) {
                  $(this).removeClass("future");
                  $(this).removeClass("present");
                  $(this).addClass("past");
              }
              else if (blockTime === timeNow) {
                  $(this).removeClass("past");
                  $(this).removeClass("future");
                  $(this).addClass("present");
              }
              else {
                  $(this).removeClass("present");
                  $(this).removeClass("past");
                  $(this).addClass("future");

              }
        })
    }
  // Retrieves and sets previously saved text to correct time block upon refresh or return to page
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    timeTracker();
})