// Define a function to calculate the area 
function CalculateRectangleArea(length, width) {

    // Calculate the area
    var area = length * width;

    // Output the area
    return area;
}

// Input length and width
var length = parseFloat(prompt("Enter the length: "));
var width = parseFloat(prompt("Enter the width: "));

// Call the function with the arguements (length, width)
var result = CalculateRectangleArea(length, width);

// Outtput the result
console.log("The area of the triangle is " + area);
