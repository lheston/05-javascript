'use strict'; //not a line of JS directive to the browser to be tougher on errors and interpreting tough on syntax
/* JavaScript will go here */
console.log('hello world');
//no need to declare types for variables
var x = 42;
var message = "Hello Loomis";

console.log(message);

var ex1 = "The iSchool is my school";

console.log(ex1);

ex1 = ex1.toLocaleUpperCase();
console.log(ex1);

var ex2 = ex1.substring(2,10);

console.log(ex2);

var ex3 = ex2.indexOf("cool");

console.log(ex3);

//Declare a new variable `rect` that represents a rectangle
//This should be an Object with properties:
//  x-coordinate of 30, y-coordinate of 50
//  width of 100, height of 50

var rect = {
    x: 30,
    y: 50,
    width:100,
    height:50
}


//Log out the rectangle's starting position (as "30, 50")
console.log(rect.x + ', ' + rect.y);

//Log out the rectangle's area

console.log(rect.width*rect.height);

//"Move" the rectangle to the right by 20 and up by 10
//by changing its properties
rect.x = rect.x + 20;
rect.y = rect.y + 10;

//Log out the rectangle's new position
console.log(rect.x + ', ' + rect.y);



//Declare a variable `circle` that represents a circle
//This should be an Object with properties:
//  center-x-coord of 50, center-y-coord of 50
//  radius of 35

var circle = {
    cx: 50,
    cy: 50,
    radius: 35
}
//Declare a variable `shapes` that represents a list of shapes
//The list should contain the rectangle and the circle

var shapes = [rect, circle];
console.log(shapes);

//Implement a function `getArea()` that takes as a 
//parameter an object representing a circle (like 
//from the last exercise) and returns the area of 
//that circle. 
//  Area calculated as is π*(radius^2)


//HINTS: 
// 1. Pi is defined in the Math class
// 2. ^ is not an exponential operator!

//The area of your circle should be 3848.451

function getArea(r){
    ex = Math.PI*(Math.pow(r,2));
    console.log(ex);
}

var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach loop to sum up the numbers 
//in the array. Log out this sum.

var sum = 0;

numbers.forEach(function(num){
    sum += num;
});

console.log(sum);




//Use a forEach loop to find the biggest 
//number in the array. Log out this number.