// Prompt the user to input a number
const number = parseInt(
  prompt("Enter a number to generate its multiplication table:"),
  10
);

// Check if the input is a valid number
if (!isNaN(number)) {
  let multiplicationTable = "";

  // Generate the multiplication table for the input number from 1 to 10
  for (let i = 1; i <= 10; i++) {
    multiplicationTable += `${number} x ${i} = ${number * i}\n`;
  }

  // Display the multiplication table
  alert(`Multiplication Table for ${number}:\n${multiplicationTable}`);
} else {
  // Display an error message for invalid input
  alert("Invalid input. Please enter a valid number.");
}
