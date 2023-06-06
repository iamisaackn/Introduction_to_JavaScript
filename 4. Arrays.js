
// An array is a special variable, which can hold more than one value.
// Example
const cars = ["Saab", "Volvo", "BMW"];

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.
// Syntax:
const array_name = [item1, item2, ...];   

// You can also create an array, and then provide the elements:
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
let myCars = cars;
console.log(myCars);

// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:
const cars = new Array("Saab", "Volvo", "BMW");
let newArray = cars;
console.log(newArray);

// The two examples above do exactly the same.
// There is no need to use new Array().
// For simplicity, readability and execution speed, use the array literal method.

// Accessing Array Elements
// You access an array element by referring to the index number:
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car);
// the output will be 'Saab'. We begin counting from 0.
// Note: Array indexes start with 0.
// [0] is the first element. [1] is the second element.

// Changing an Array Element
// This statement changes the value of the first element in cars:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
console.log(cars[0]);

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits.toString());
//Banana,Orange,Apple,Mango

// Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // the array name is "cars"

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.

// 1.  Arrays use numbers to access its "elements". In this example, person[0] returns John:
const person = ["John", "Doe", 46];
console.log(person[0]);

// 2. Objects use names to access its "members". In this example, person.firstName returns John:
const person = {firstName: "John",lastName:"Doe", age: 46};
console.log(person.firstName);

// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

