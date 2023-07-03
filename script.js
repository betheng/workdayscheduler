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
// Checks current time and converts it to military hour format
        var currentHour = moment().format("HH");
        console.log("Current Hour: ", currentHour);
// Splits name of time-block id, creates array and selects second half to match military hour format
        $(".time-block").each(function () {
          var timeBlock = $(this).attr("id").split("-")[1];
// Checks current hour against html time block and conditions appropriately
          if (currentHour === timeBlock) {
            $(this).addClass("present");
          } else if (currentHour < timeBlock) {
            $(this).removeClass("present");
            $(this).addClass("future");
          } else if (currentHour > timeBlock) {
            $(this).removeClass("future");
            $(this).addClass("past");
          }
          console.log("Check format: ", timeBlock)
        });
    }
  // Retrieves and sets previously saved text to correct time block upon refresh or return to page
    $("#hour-09 .description").val(localStorage.getItem("hour-9"));
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