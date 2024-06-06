// Prompt the user to input the angles of the triangle
const angle1 = parseInt(prompt("Enter the first angle of the triangle:"));
const angle2 = parseInt(prompt("Enter the second angle of the triangle:"));
const angle3 = parseInt(prompt("Enter the third angle of the triangle:"));

// Check if the input is valid
if (!isNaN(angle1) && !isNaN(angle2) && !isNaN(angle3)) {
    // Check if the angles form a valid triangle
    if (angle1 + angle2 + angle3 === 180) {
        alert("The triangle is valid.");
    } else {
        alert("The triangle is not valid.");
    }
} else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter valid angles for the triangle.");
}
