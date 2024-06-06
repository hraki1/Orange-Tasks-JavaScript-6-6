// Prompt the user for a year
const year = parseInt(prompt("Enter a year:"), 10);

// Variable to hold the result
let result;

// Check if the year is a leap year
if (!isNaN(year)) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = `${year} is a leap year.`;
    } else {
        result = `${year} is not a leap year.`;
    }
} else {
    result = 'Invalid input. Please enter a valid year.';
}

// Display the result using alert
alert(result);