// JavaScript Document

var homework = {
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
};

var name;
for (name in homework) {
    if (typeof homework[name] !== 'function')
    document.write(homework[name]);
}

for (name in gym) {
    if (typeof gym[name] !== 'function')
    document.write(gym[name]);
}

for (name in cookDinner) {
    if (typeof cookDinner[name] !== 'function')
    document.write(cookDinner[name]);
}

for (name in shower) {
    if (typeof shower[name] !== 'function')
    document.write(shower[name]);
}

for (name in laundry) {
    if (typeof laundry[name] !== 'function')
    document.write(laundry[name]);
}


function finished(status) {
  if (status == 'complete')
    return status;
  else
  throw "Task is not yet completed";
}

/*
var toDo = [ homework.name, gym.name, cookDinner.name , shower.name, laundry.name];

document.write('<ul>'); //print unordered list onto html page

for(var i = 0; i < toDo.length; i++) {
	document.write('<li>' + toDo[i] + '</li>');  //write the array item and list item tags
}

document.write('</ul>');  //end unordered list
*/



