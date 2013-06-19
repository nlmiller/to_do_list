// JavaScript Document

var toDo = ['Homework', 'Gym', 'Cook Dinner', 'Shower', 'Laundry'];

document.write('<ul>'); //print unordered list onto html page

for(var i = 0; i < toDo.length; i++) {
	document.write('<li>' + toDo[i] + '</li>');  //write the array item and list item tags
}

document.write('</ul>');  //end unordered list