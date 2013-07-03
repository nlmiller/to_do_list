// JavaScript Document


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

/*function print(theTask){
    if(typeof theTask.name == 'undefined') {
        throw 'The task name is missing!'
    } else if (typeof theTask.complete == 'undefined'); {
        throw 'The task status is missing!'
    } else {
        document.write(myTasks[i].name + ' ' + myTasks[i].complete + ' ' + myTasks[i].date + '<br >');
        //console.log('print out a pretty list here')
  }
}*/

var laundry = {
    'name': 'Laundry',
    'complete': true,
     'date': 'Due 6/18/13'
};

var homework = {
    'name' : 'Homework',
    'complete' : false,
    'date': 'Due 6/28/13'
}

$(document).ready(function() {
    

$(document.body).append(laundry.name + '' + laundry.complete + ' ' + laundry.date + ' ' + homework.name + ' ' + homework.complete + '' + homework.date);
//$(document.body).appendTo(myTasks[i].name + '' + myTasks[i].complete + '' + myTasks[i].date);

$(laundry).addClass('.complete').css({'background-color':'blue'});

});



