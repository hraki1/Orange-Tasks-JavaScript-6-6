// Prompt the user for their age
const age = parseInt(prompt("Enter your age:"), 10);

// Prompt the user for their nationality
const nationality = prompt("Enter your nationality:").toLowerCase();

// Check if the input for age is a valid number
if (!isNaN(age) && age > 0) {
  // Check if the user is at least 18 years old
  if (age >= 18) {
    // Check if the nationality is American
    if (nationality === "american") {
      alert("You are eligible to vote.");
    } else {
      alert("You are not eligible to vote. Only Americans can vote.");
    }
  } else {
    alert("You are not eligible to vote. You must be at least 18 years old.");
  }
} else {
  // Invalid input for age
  alert("Invalid input. Please enter a valid age.");
}
