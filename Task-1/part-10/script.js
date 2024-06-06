  // Prompt the user for the type of user
  const userType = prompt("Enter your user type (student or teacher):").toLowerCase();

  // Prompt the user for the number of books they want to borrow
  const numberOfBooks = parseInt(prompt("Enter the number of books you want to borrow:"), 10);

  // Check if the input is a valid number
  if (!isNaN(numberOfBooks) && numberOfBooks > 0) {
      let maxBooks;
      let message;

      // Determine the borrowing limits based on the user type
      if (userType === "student") {
          maxBooks = 3;
      } else if (userType === "teacher") {
          maxBooks = 5;
      } else {
          alert("Invalid user type. Please enter 'student' or 'teacher'.");
          maxBooks = -1; // Invalid state
      }

      // Check the borrowing limits
      if (maxBooks !== -1) {
          if (numberOfBooks <= maxBooks) {
              message = `Loan approved! You can borrow ${numberOfBooks} books.`;
          } else {
              message = `Loan not approved. ${userType.charAt(0).toUpperCase() + userType.slice(1)}s can only borrow up to ${maxBooks} books.`;
          }

          // Display the message
          alert(message);
      }
  } else {
      // Invalid input for the number of books
      alert('Invalid input. Please enter a valid number for the number of books.');
  }