//Javascript File
var myTask;

$(document).ready(function() {
    
     myTask = {
         
        'tasks' : {
            'list' : [{
                'name': 'Laundry',
                'complete': true
                },{
                'name' : 'Homework',
                'complete' : false
                }, {
                'name': 'Gym',
                'complete': true
                }, {
                'name': 'Cook Dinner'
                
                }, {
                'name': 'Shower',
                'complete': true
            }],
            'render':function (task) { 
                    if(typeof task.name === 'undefined') {
                    throw 'The name of this task is missing! Help!';
                } else if (typeof task.complete === 'undefined') {
                    throw 'The completion status of this task is gone. OH NO';
                }
    
                     if(task.complete) {
                    return '<li class="complete">' + task.name + '</li>';
                } else {
                    return '<li>' + task.name + '</li>'; 
                }
                }
            },
        'add' : function() {
            
        },
        'remove' : function() {
            $('.complete').remove();   
        },
        'dispay' :function() {
                var tasks = this.tasks;
                var html = '<h2>My Tasks</h2>'; // contain our HTML as a string
    
                    html +='<ul>';

                    for(var i= 0; i < tasks.list.length; i++) {
                        try {
                            html += tasks.render(tasks.list[i]);
                        } catch (msg) {
                            console.log('There is a problem: ' + msg);
                        }
                    }
                    
                    html += '</ul>';
                    $('.container').html(html);
        },
        'init' : function() {
            this.add('Take out the garbage', moment('2013-07-15'));
            this.add('Fold the laundry', moment());
            this.add('Feed the dog');
            this.add('Do week 7 slides');
            this.display();
        }
         
    }
    myTask.init();
});

/*
function () {
            var tasks = this.tasks;
            var html = '<h2>To Do</h2>'; // contain our HTML as a string
    
             html +='<ul>';
    
    
             for(var i= 0; i < myTasks.list.length; i++) {
                 try {
                 html += myTasks.render(myTasks.list[i]);
                 //html += printTask(myTasks[i]);
                } catch (msg) {
                console.log('There is a problem: ' + msg);
                }
            }
    
             html += '</ul>';

            $('.container').append(html);
        }
        
        
    }*/
