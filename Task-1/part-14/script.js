   // Define menu prices
   const pizzaPrice = 10;
   const pastaPrice = 8;
   const saladPrice = 6;
   const discount = 2; // Discount for ordering more than one item

   // Prompt the user to input their order
   const order = prompt("Enter your order (Pizza, Pasta, or Salad):").toLowerCase();

   // Initialize total price
   let totalPrice = 0;

   // Check the user's order and calculate the price
   if (order === "pizza") {
       totalPrice += pizzaPrice;
   } else if (order === "pasta") {
       totalPrice += pastaPrice;
   } else if (order === "salad") {
       totalPrice += saladPrice;
   } else {
       alert("Invalid order. Please select from the menu (Pizza, Pasta, or Salad).");
   }

   // Offer discount for ordering more than one item
   const additionalOrder = confirm("Would you like to order another item?");
   if (additionalOrder) {
       totalPrice -= discount;
   }

   // Display the final price
   alert(`Your total price is $${totalPrice}.`);
