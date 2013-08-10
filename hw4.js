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
                'complete': false
                }, {
                'name': 'Cook Dinner'
                
                }, {
                'name': 'Shower',
                'complete': true
            }],
            'render': function (task) { 
                    if(typeof task.name === 'undefined') {
                    throw 'The name of this task is missing!';
                } else if (typeof task.complete === 'undefined') {
                    throw 'The completion status of this task is gone.';
                }
    
                     if(task.complete) {
                    return '<li class="complete">' + task.name + '</li>';
                } else {
                    return '<li>' + task.name + '</li>'; 
                }
                }
            },
        'add' : function(name) {
            this.tasks.list.push(new tasks(name));
        },
        'remove' : function() {
            $('.complete').remove();   
        },
        'dispay' :function() {
                var tasks = this.tasks;
                var html = '<h2>My Tasks</h2>';
    
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
            this.add('Finish Project');
            this.add('Email Boss');
            this.add('Call Tim');
            this.display();
        }
        
         
    };
});


