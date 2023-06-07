// JavaScript Array length
// The length property returns the length (size) of an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length; // Return 4

// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits.tostring());

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" * ");
console.log(fruits.join(" * ")); // Returns "Banana * Orange * Apple * Mango"
