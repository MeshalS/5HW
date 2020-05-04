# 5HW

in this home work , i did change the class given becuase i had hard time with Boostrap so i used
another one of Boostrap so i can strart somthing for the scratch 

also i was able to know font Aswome it is greate 

the Most Import thing in this homework is for loop and how to loop to create
row and also to have indexs rigth 

then comes the logic where you need to strart from 9:00 AM
the most important 
Geeting the loop 
 for (let hours = 9; hours <= 17; hours++) {
    // creating row and applied
    let RowDiv = $('<div>');
    RowDiv.addClass('row');  //bootstrap
    RowDiv.addClass('PlannerRow');
    RowDiv.attr('hour-index', hours);
 also the local stroge by index of the text 

    let getComment = localStorage.getItem("StoredPlans-" + index)
    if (getComment != null) {

      dailyPlaneSpan.val(getComment);
    }

