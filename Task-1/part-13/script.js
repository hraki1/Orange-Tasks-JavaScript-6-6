// Prompt the user for their age
const age = parseInt(prompt("Enter your age:"), 10);

// Prompt the user for the type of movie (Regular or 3D)
const movieType = prompt(
  "Enter the type of movie (Regular or 3D):"
).toLowerCase();

// Define ticket prices
const regularTicketPrice = 10; // Regular movie ticket price
const _3dTicketPrice = 15; // 3D movie ticket price
const childDiscount = 2; // Discount for children under 12

// Check if the input for age is a valid number
if (!isNaN(age)) {
  let ticketPrice;

  // Check the type of movie and calculate the ticket price
  if (movieType === "regular") {
    ticketPrice =
      age < 12 ? regularTicketPrice - childDiscount : regularTicketPrice;
  } else if (movieType === "3d") {
    ticketPrice = age < 12 ? _3dTicketPrice - childDiscount : _3dTicketPrice;
  } else {
    // Invalid movie type
    alert("Invalid movie type. Please enter 'Regular' or '3D'.");
  }

  // Display the ticket price
  if (ticketPrice !== undefined) {
    alert(`The ticket price is $${ticketPrice}.`);
  }
} else {
  // Invalid input for age
  alert("Invalid input. Please enter a valid age.");
}
