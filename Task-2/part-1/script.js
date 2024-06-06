// Prompt the user to input the month number
const monthNumber = parseInt(prompt("Enter the month number (1-12):"));

// Check if the input is a valid number
if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
    let daysInMonth;

    // Determine the number of days based on the month number
    if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || monthNumber === 8 || monthNumber === 10 || monthNumber === 12) {
        daysInMonth = 31;
    } else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
        daysInMonth = 30;
    } else if (monthNumber === 2) {
        daysInMonth = 28; // Assuming non-leap year
    }

    // Display the number of days for the month
    alert(`Month ${monthNumber} has ${daysInMonth} days.`);
} else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid month number between 1 and 12.");
}
