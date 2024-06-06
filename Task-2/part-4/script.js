// Prompt the user to input a number
const number = parseInt(prompt("Enter a number:"));

// Check if the input is valid
if (!isNaN(number)) {
    // Check if the number is positive
    if (number > 0) {
        alert(`${number} is a positive number.`);
    } else if (number === 0) {
        alert(`${number} is neither positive nor negative (it's zero).`);
    } else {
        alert(`${number} is a negative number.`);
    }
} else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid number.");
}
