// JavaScript Document

/*var homework = {
    "name": "Homework",
    status: "incomplete",
    date: "Due 6/28/13"
};

var gym = {
    "name": "Gym",
    status: "complete",
    date: "Due 6/18/13"
};

var cookDinner = {
    "name": "Cook Dinner",
    status: "complete",
    date: "Due 6/18/13"
};

var shower = {
    "name": "Shower",
    status: "complete",
    date: "Due 6/18/13"
};

var laundry = {
    "name": "Laundry",
    status: "complete",
    date: "Due 6/18/13"
};*/

var myTasks = [{
    'name': 'Laundry',
    'complete': true,
     'date': 'Due 6/18/13'
}, {
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
    //document.write(myTasks[i]);
    document.write(myTasks[i].name + ' ' );
    document.write(myTasks[i].complete + ' ' );
    document.write(myTasks[i].date  + '<br >');
}


for(var i = 0; i < myTasks.length; i++) {
    try {
       print(myTasks[i]);
    } catch (error) {
        console.log(error);
    }
}

function print(theTask){
    if(typeof theTask.name == 'undefined') {
        throw 'The task name is missing!'
    } else if (typeof theTask.complete == 'undefined') {
        throw 'The task status is missing!'
    } else {
        console.log('print this out as a fancy list item with a check next to it if theTask.complete is true.');
    }
}

/*var tasks = [ homework, gym, cookDinner , shower, laundry];

document.write('<ul>'); //print unordered list onto html page

for(var i = 0; i < tasks.length; i++) {
	document.write('<li>' + tasks[i] + '</li>');  //write the array item and list item tags
}

document.write('</ul>');  //end unordered list

*/


