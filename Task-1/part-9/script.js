// Prompt the user for the first number
const num1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user for the second number
const num2 = parseFloat(prompt("Enter the second number:"));

// Prompt the user for the arithmetic operator
const operator = prompt("Enter an arithmetic operator (+, -, *, /):");

// Check if the inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
  let result;

  // Perform the corresponding arithmetic operation
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    // Handle division by zero
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Error: Division by zero is not allowed.";
    }
  } else {
    result = "Error: Invalid operator. Please use +, -, *, or /.";
  }

  // Display the result
  alert(`The result is: ${result}`);
} else {
  // Invalid input
  alert("Invalid input. Please enter valid numbers.");
}
