// Prompt the user for the temperature in Celsius
const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));

// Check if the input is a valid number
if (!isNaN(celsius)) {
  // Convert the temperature to Fahrenheit
  const fahrenheit = (celsius * 9) / 5 + 32;

  // Determine the state of the temperature
  let state;
  if (celsius < 0) {
    state = "below freezing";
  } else if (celsius > 100) {
    state = "above boiling";
  } else {
    state = "normal";
  }

  // Display the result using alert
  alert(
    `The temperature in Fahrenheit is ${fahrenheit.toFixed(
      2
    )}°F. It is ${state}.`
  );
} else {
  // Invalid input
  alert("Invalid input. Please enter a valid number for the temperature.");
}
