## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.



### ForEach

The forEach method is used to iterate through an array in javascript. The method is called once for each elemen in the array. In the example code below (www.3schools.com), forEach is is used to iterate through the array and present the result.

#### Example code

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
}

### map

The map method is used to iterate through an array as well, but unlike forEach, map saves the results in a new array. A use case for this method is when you want to search through a json file for example and save the rsults in an array, to be able to present the result at a later date. The example below is used to map through the array and the result is a new array with the sqaure roots of the numbers in the array.

#### Example code

var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x; 

### filter

The filter method is used that is used to iterate through an array and return an array that is filled with elements that must pass a certain threshhold. A use case for this would be to iterate through an array with my cohorts birthdays and only return cohorts that are born in the 80's. The example below returns people that are 18 or older.

#### Example code

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
} 

### find

The find method iterates through an array and returns the first element that meets certain conditions. Unlike filter, this method will only return the first element. The example code below will only return 18. A use case would be to search a data set for example if you wanted to check that there was no under age person, that is to ensure that something does not exist.

#### Example code

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}
