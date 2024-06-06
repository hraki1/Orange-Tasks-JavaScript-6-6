// Prompt the user to input the day number
const dayNumber = parseInt(prompt("Enter the day number (1-7):"));

// Check if the input is a valid number
if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 7) {
    let dayName;

    // Determine the day name based on the day number
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
    }

    // Display the day name
    alert(dayName);
} else {
    // Display an error message for invalid input
    alert("Invalid input. Please enter a valid day number between 1 and 7.");
}
