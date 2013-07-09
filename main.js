// JavaScript Document



$(document).ready(function() {
    
    var myTasks = [{
    'name': 'Laundry',
    'complete': true,
     'date': 'Due 6/18/13'
},{
    'name' : 'Homework',
    'complete' : false,
    'date': 'Due 6/28/13'
}, {
    'name': 'Gym',
    'complete': true,
    'date': 'Due 6/18/13'
}, {
    'name': 'Cook Dinner',

    'date': 'Due 6/18/13'
}, {
    'name': 'Shower',
    'complete': true,
    'date': 'Due 6/18/13'
}];

for(var i = 0; i < myTasks.length; i++) {
    try {
       print(myTasks[i]);
    } catch (error) {
        console.log(error);
    }
}

function print(theTask){
    if(typeof theTask.name === 'undefined') {
        throw 'The task name is missing!';
    } else if (typeof theTask.complete === 'undefined') {
        throw 'The task status is missing!';
    } 
    
    if(theTask.complete) {
        return '<li class="complete">' + theTask.name + '</li>';
    } else {
        return '<li>' + theTask.name + '</li>';
    }
    


$('.container').append(myTasks[i].name + '' + myTasks[i].complete + '' + myTasks[i].date);

//$(laundry).addClass('.complete').css({'background-color':'blue'});

});



