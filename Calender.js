$(document).ready(function () {
  //array
  var planeTextArr = [];
  // time 
  const TodayDate = moment().format('MMMM Do YYYY');
  $('#navbarDate').text(TodayDate);
/////// creating pllnaner 
  var EventContainer = $('#PlannerContainer');
  // for loop to start from 9
  for (let hours = 9; hours <= 17; hours++) {
    // creating row and applied
    let RowDiv = $('<div>');
    RowDiv.addClass('row');  //bootstrap
    RowDiv.addClass('PlannerRow');
    RowDiv.attr('hour-index', hours);
    // cloum 
    let colTimeDiv = $('<div>');
    colTimeDiv.attr('class', 'col-md-2')
    let timeBoxSpan = $('<span>');
    timeBoxSpan.attr('class', 'timeBox');
    // diplaying the time 
    let displayHours = 0;
    let displaShape = "";  //AM OR PM
    if (hours > 12) {
      displayHours = hours - 12;
      displaShape = "PM";
    }

    else {
      displayHours = hours;
      displaShape = "AM";
    }
// the text 
    timeBoxSpan.text(`${displayHours} ${displaShape}`);
// appening the row 
    EventContainer.append(RowDiv);
    RowDiv.append(colTimeDiv); //2-md
    colTimeDiv.append(timeBoxSpan);
    let index = hours - 9;
    let colInputDiv = $('<div>');
    colInputDiv.addClass('col-md-9');
    let dailyPlaneSpan = $('<input>');
    dailyPlaneSpan.attr('id', `input-${index}`);
    dailyPlaneSpan.attr('type', 'text');
    dailyPlaneSpan.attr('class', 'dailySapn');
// creating the to get the local the stroge from the index of the input and the store plan
    let getComment = localStorage.getItem("StoredPlans-" + index)
    if (getComment != null) {

      dailyPlaneSpan.val(getComment);
    }

    RowDiv.append(colInputDiv);
    colInputDiv.append(dailyPlaneSpan)

    let colButtonSaveDiv = $('<div>');
    colButtonSaveDiv.addClass('col-md-1');

    let SaveBtn = $('<i>');
    SaveBtn.attr('class', 'fa fa-save SaveIcon');
    SaveBtn.attr('id', `${index}`);
    RowDiv.append(colButtonSaveDiv);
    colButtonSaveDiv.append(SaveBtn);

    ChangeRowColor(dailyPlaneSpan, hours);

  };
// saving 
  $(".SaveIcon").on("click", function () {

    var CurrentIndex = $(this).attr("id")

    var comment = $(`#input-${CurrentIndex}`).val();
    // will be push it the array 
    planeTextArr.push(comment);
    // set the local storge 
    localStorage.setItem("StoredPlans-" + CurrentIndex, comment);



  })

});

let nowHours24 = moment().format('H');
/// condition for the colour 
function ChangeRowColor(DivRow, hours) {

  if (hours > nowHours24) {
    DivRow.css("background-color", "green");
  }

  else if (hours < nowHours24) {
    DivRow.css("background-color", "gray");

  }
  else {
    DivRow.css("background-color", "red");

  }


}

