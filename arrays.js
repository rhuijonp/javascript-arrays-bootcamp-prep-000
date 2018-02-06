/*
var ingridient1 = "bread";
var ingridient2 = "mild cheese";
var ingridient3 = "sharp cheese";
var ingridient4 = "butter";
var ingridient5 = "tomato";
var ingridient6 = "garlic";
*/

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, e) {
   array = [e,...array];
   return array;
}

function destructivelyAddElementToBeginningOfArray(array, e) {
   array.unshift(e);
   return array;
}

function 