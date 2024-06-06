// Define prices per room type
const singleRoomPricePerNight = 50;
const doubleRoomPricePerNight = 80;
const suiteRoomPricePerNight = 120;

// Prompt the user to input the type of room and number of nights
const roomType = prompt(
  "Enter the type of room you want to book (Single, Double, or Suite):"
).toLowerCase();
const numberOfNights = parseInt(
  prompt("Enter the number of nights you want to stay:"),
  10
);

// Initialize total cost
let totalCost;

// Calculate total cost based on room type and number of nights
if (roomType === "single") {
  totalCost = singleRoomPricePerNight * numberOfNights;
} else if (roomType === "double") {
  totalCost = doubleRoomPricePerNight * numberOfNights;
} else if (roomType === "suite") {
  totalCost = suiteRoomPricePerNight * numberOfNights;
} else {
  alert("Invalid room type. Please enter Single, Double, or Suite.");
}

// Display the total cost
if (totalCost !== undefined) {
  alert(`The total cost for your stay is $${totalCost}.`);
}
