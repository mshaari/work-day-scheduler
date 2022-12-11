//QUESTION -- does this need to reset at the end of each day??

$(function () {
  //Declare saveButton variable equal to HTMl element with class="btn"
  var saveButton = $('.btn');

  //Declare variable hour for the current hour using dayjs() function
  var hour = dayjs().hour();

  //Set today equal to the actual current day using dayjs() function
  var today = dayjs();

  //Set the HTML element with id="current-day" to display current day in (Day of Week), (Month) (Day), (Year) form
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
  
  //Event listener -- when user clicks the save button for any given row, the following code executes (see code for more comments)
  saveButton.on("click", function () {
    //Finds jQuery object being referenced in this function, finds its sibling with the class="description" (the text the user typed), and gets its value. Then it sets that equal to a variable "text"
    var text = $(this).siblings(".description").val(); 

    //Finds jQuery object being referenced in this function, finds its parent element, and gets the id of that parent element (which is the hour for that slot). Then it sets that equal to a variable "time"
    var time = $(this).parent().attr("id"); 

    //Saves the entered information and the associated time (id) to local storage
    localStorage.setItem(time, text); 
  })

  //Check local storage and set all rows to have the saved data from prior sessions
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));



  //A number of cases to determine the coloring for each block depending on the time of day. If the current time (hour) is less than the time for that row, that row is in the future so it adds the class "future" so that element using its id. This gives it a green shade. If the current time is greater than the time for that row, it adds the class "past" to that element which gives it a grey shade. If the current time is equal to the time for that row, it gets the class "present" and is shaded red. This applies for all cases below
  if (hour < 9) {
    $("#hour-9").addClass("future");
  } else if (hour > 9) {
    $("#hour-9").addClass("past");
  } else if (hour = 9) {
    $("#hour-9").addClass("present");
  }

  if (hour < 10) {
    $("#hour-10").addClass("future");
  } else if (hour > 10) {
    $("#hour-10").addClass("past");
  } else if (hour = 10) {
    $("#hour-10").addClass("present");
  }

  if (hour < 11) {
    $("#hour-11").addClass("future");
  } else if (hour > 11) {
    $("#hour-11").addClass("past");
  } else if (hour = 11) {
    $("#hour-11").addClass("present");
  }

  if (hour < 12) {
    $("#hour-12").addClass("future");
  } else if (hour > 12) {
    $("#hour-12").addClass("past");
  } else if (hour = 12) {
    $("#hour-12").addClass("present");
  }

  if (hour < 13) {
    $("#hour-13").addClass("future");
  } else if (hour > 13) {
    $("#hour-13").addClass("past");
  } else if (hour = 13) {
    $("#hour-13").addClass("present");
  }

  if (hour < 14) {
    $("#hour-14").addClass("future");
  } else if (hour > 14) {
    $("#hour-14").addClass("past");
  } else if (hour = 14) {
    $("#hour-14").addClass("present");
  }

  if (hour < 15) {
    $("#hour-15").addClass("future");
  } else if (hour > 15) {
    $("#hour-15").addClass("past");
  } else if (hour = 15) {
    $("#hour-15").addClass("present");
  }

  if (hour < 16) {
    $("#hour-16").addClass("future");
  } else if (hour > 16) {
    $("#hour-16").addClass("past");
  } else if (hour = 16) {
    $("#hour-16").addClass("present");
  }

  if (hour < 17) {
    $("#hour-17").addClass("future");
  } else if (hour > 17) {
    $("#hour-17").addClass("past");
  } else if (hour = 17) {
    $("#hour-17").addClass("present");
  }
});
