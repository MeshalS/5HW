$(document).ready(function(){
    // this for date 
    var ToDay =moment().format('MMMM Do YYYY');
    $('#currentDay').text(ToDay);
    var planner= $('#workDay') ;

})
for(let hours=9;hours<=17;hours++)
{
    //creating row 
var RowDiv =$('<div>');
RowDiv.addClass('row');  
RowDiv.addClass('PlannerRow');
RowDiv.attr('hour-index',hours);

var colTimeDiv=$('<div>');
colTimeDiv.attr('class','col-md-2')
}