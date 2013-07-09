$(document).ready(function(){
    
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
    
    var html = '<h2>To Do</h2>'; // contain our HTML as a string
    
        html +='<ul>';
    
    
    for(var i= 0; i < myTasks.length; i++) {
        try {
            html += printTask(myTasks[i]);
        } catch (msg) {
            console.log('There is a problem: ' + msg);
        }
    }
    
    html += '</ul>';
    
    
    $('.container').append(html);    

});

function printTask(myTask) {
    if(typeof myTask.name === 'undefined') {
        throw 'The name of this task is missing! Help!';
    } else if (typeof myTask.complete === 'undefined') {
        throw 'The completion status of this task is gone. OH NO';
    }
    
    if(myTask.complete) {
        return '<li class="complete">' + myTask.name + '</li>';
    } else {
        return '<li>' + myTask.name + '</li>'; 
    }
}

function removeCompleted() {
    $('.complete').remove();
}

