// Prompt the user to input a temperature
const temperature = parseFloat(prompt("Enter the temperature in Celsius:"));

// Check if the input is a valid number
if (!isNaN(temperature)) {
    let message;

    // Categorize the temperature
    if (temperature < 0) {
        message = "Very Cold";
    } else if (temperature >= 0 && temperature <= 15) {
        message = "Cold";
    } else if (temperature >= 16 && temperature <= 25) {
        message = "Warm";
    } else if (temperature > 25) {
        message = "Hot";
    }

    // Display the appropriate message
    alert(`The temperature is ${message}.`);
} else {
    // Invalid input
    alert('Invalid input. Please enter a valid temperature.');
}