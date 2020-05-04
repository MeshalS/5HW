$(document).ready(function () {
  var planeTextArr = [];  

  const TodayDate = moment().format('MMMM Do YYYY');

  $('#navbarDate').text(TodayDate);


  var EventContainer = $('#PlannerContainer');

  

  for (let hours = 9; hours <= 17; hours++) {
    let RowDiv = $('<div>');
    RowDiv.addClass('row');  //bootstrap
    RowDiv.addClass('PlannerRow');

    RowDiv.attr('hour-index', hours);

   

    let colTimeDiv = $('<div>');
    colTimeDiv.attr('class', 'col-md-2')

    let timeBoxSpan = $('<span>');
    timeBoxSpan.attr('class', 'timeBox');

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


    timeBoxSpan.text(`${displayHours} ${displaShape}`);



    EventContainer.append(RowDiv);
    RowDiv.append(colTimeDiv); //2-md
    colTimeDiv.append(timeBoxSpan);





    let index = hours - 9;

    let colInputDiv = $('<div>');
    colInputDiv.addClass('col-md-9');

    let dailyPlaneSpan = $('<input>');
    dailyPlaneSpan.attr('id', `input-${index}`);
    //dailyPlaneSpan.attr('hour-index',index);
    dailyPlaneSpan.attr('type', 'text');
    dailyPlaneSpan.attr('class', 'dailySapn');

    let getComment=localStorage.getItem("StoredPlans-"+index) 
    if(getComment!=null){
      
      dailyPlaneSpan.val( getComment); //hello
    }
   
    RowDiv.append(colInputDiv);
    colInputDiv.append(dailyPlaneSpan)

    let colButtonSaveDiv = $('<div>');
    colButtonSaveDiv.addClass('col-md-1');

    let SaveBtn = $('<i>');
    SaveBtn.attr('class', 'fa fa-save SaveIcon');
    SaveBtn.attr('id', `${index}`);
    // SaveBtn.attr('Save-Id', index);

    RowDiv.append(colButtonSaveDiv);
    colButtonSaveDiv.append(SaveBtn);

    ChangeRowColor(dailyPlaneSpan, hours);

  };

$(".SaveIcon").on("click",function(){

  var CurrentIndex=$(this).attr("id")
  
    var comment=$(`#input-${CurrentIndex}`).val();
    planeTextArr.push(comment) ;
    localStorage.setItem("StoredPlans-"+CurrentIndex, comment);
 
  
 
})

  $(document).on('click', 'i', function (event) {

    event.preventDefault();

    let CurrentIndex = $(this).attr('Save-Id');


    let inputId = '#input-' + CurrentIndex;


    let InputValue = $(inputId).val();


    planeTextArr[CurrentIndex] = InputValue;
    localStorage.setItem("StoredPlans", JSON.stringify(planeTextArr));

  });

});

let nowHours24 = moment().format('H');
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

