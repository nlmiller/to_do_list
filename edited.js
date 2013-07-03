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

document.write('<h2>My Tasks</h2>');
document.write('<ul>');

for(var i= 0; i < tasks.length; i++) {
    try {
        printTask(tasks[i]);
    } catch (msg) {
        console.log('There is a problem: ' + msg);
    }
}

document.write('</ul>');

function printTask(task) {
    if(typeof task.name == 'undefined') {
        throw 'The name of this task is missing! Help!';
    } else if (typeof task.complete == 'undefined') {
        throw 'The completion status of this task is gone. OH NO'
    }
    
    if(task['complete']) {
        document.write('<li class="complete">' + task.name + '</li>');
    } else {
        document.write('<li>' + task.name + '</li>'); 
    }
}