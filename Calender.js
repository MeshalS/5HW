$(document).ready(function(){

    //TodayDate
    
    let TodayDate =moment().format('MMMM Do YYYY');
    // taking the dat
    $('#navbarDate').text(TodayDate);
    
    // hvaing the planner id in the even contorier so we can use it 
    var EventContainer=$('#Planner');
    // to get the locla storege 
    var StoredPlane =JSON.parse(localStorage.getItem("StoredPlans"));
    // Here to see if not null then it will take all the store things 
    if(StoredPlane !==null)
    {
        planeTextArr=StoredPlane;
    }
    else
    {
        //Will be performed at the first time becuase it will bulid the array of 9 
        planeTextArr=new Array(9);
        
    }
    
    
    /// here is the for loop if lees 17 which 5 
    for(let hours=9;hours<=17;hours++)
    {
      // will create a row 
    var RowDiv =$('<div>');
    RowDiv.addClass('row');  //bootstrap
    RowDiv.addClass('PlannerRow');// create anoter for html so i can use it 
    
    RowDiv.attr('hour-index',hours);// will have the hour taken
    
    
    var colTimeDiv=$('<div>'); // create cloume of md 2
    colTimeDiv.attr('class','col-md-2')
    // will have span 
    var timeBoxSpan=$('<span>');
    timeBoxSpan.attr('class','timeBox');
    // here will have the hours start as 0
    var TOdisplayHours=0;
    var  displaShape="";  //AM OR PM
    // condtional more hten 12 then it hours - 12 and will be pm 
    if(hours>12)
    {
        TOdisplayHours=hours-12;
        displaShape="PM";
    }
    
    else
    {
        TOdisplayHours=hours;
        displaShape="AM";
    }
    
    // to put in the pan text 
    timeBoxSpan.text(`${displayHours} ${displaShape}`);
    
    
    // appening the row 
    Planner.append(RowDiv);
    // appeing to the coum 
    RowDiv.append(colTimeDiv); //2-md
    colTimeDiv.append(timeBoxSpan);
    
    
    // var mycol= document.getElementById("myid");
    // $("#myid")
    
    
    var index=hours-9;
    
    var colInputDiv=$('<div>'); /// creating div
    colInputDiv.addClass('col-md-9');
    
    var dailyPlaneSpan =$('<input>'); // for input
    dailyPlaneSpan.attr('id',`input-${index}`); // to get the index
    //dailyPlaneSpan.attr('-hourindex',index);
    dailyPlaneSpan.attr('type','text');// the eype 
    dailyPlaneSpan.attr('class','dailySapn');  // adding the class 
    
    dailyPlaneSpan.val(planeTextArr[index]); //get the vlaue  sotre then to get by index 
    RowDiv.append(colInputDiv);  // appending 
    colInputDiv.append(dailyPlaneSpan)
    
    var  colButtonSaveDiv=$('<div>'); // creating div 
    colButtonSaveDiv.addClass('col-md-1');
    // for fa fa 
    var SaveBtn =$('<i>');
    SaveBtn.attr('class','fa fa-save SaveIcon');
    SaveBtn.attr('id',`SaveId-${index}`); /// to have the save ID
    SaveBtn.attr('Save-Id',index); // using the index 
    
    RowDiv.append(colButtonSaveDiv); // appening
    colButtonSaveDiv.append(SaveBtn);// for the save 
    
    ChangeRowColor(dailyPlaneSpan,hours); // calling for the colour 
    
    };
  // if the clicked 
    $(document).on('click','i',function(event){
    
        alert("Entered function")
        event.preventDefault();
        
        var  CurrentIndex = $(this).attr('Save-Id');// to go the index save id 
       
    
        var inputId = '#input-'+CurrentIndex;  // it will have the input 
       
    
        var InputValue=$(inputId).val(); // to have the input Id
        
    
        planeTextArr[CurrentIndex]=InputValue;
        alert("Plane has saved succesfully")
        localStorage.setItem("StoredPlans",JSON.stringify(planeTextArr));  // for locla sotge 
    
    });
    
    
    
    
    });
    
    var nowHours24=moment().format('H');
    alert(nowHours24)
    // clolor 
    function ChangeRowColor(DivRow,hours)
    {
    
      if(hours>nowHours24)
      {
        DivRow.css("background-color","green");
      }
    
      else if(hours<nowHour24)
      {
         // alert("OK")
        DivRow.css("background-color","red");
    
      }
      else
      {
        DivRow.css("background-color","yellow");
     
      }
    
      
    }
    
    