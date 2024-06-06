  // Prompt the user for their current balance
  let balance = parseFloat(prompt("Enter your current balance:"));

  // Prompt the user for the withdrawal amount
  let withdrawalAmount = parseFloat(prompt("Enter the amount you want to withdraw:"));

  // Check if the inputs are valid numbers
  if (!isNaN(balance) && !isNaN(withdrawalAmount) && balance >= 0) {
      // Check if the withdrawal amount is less than or equal to the balance and greater than zero
      if (withdrawalAmount > 0 && withdrawalAmount <= balance) {
          // Subtract the withdrawal amount from the balance
          balance -= withdrawalAmount;

          // Display the new balance
          alert(`Transaction successful! Your new balance is $${balance.toFixed(2)}`);
      } else if (withdrawalAmount <= 0) {
          // Withdrawal amount is not greater than zero
          alert('Error: The withdrawal amount must be greater than zero.');
      } else {
          // Withdrawal amount exceeds the current balance
          alert('Error: Insufficient balance.');
      }
  } else {
      // Invalid input for balance or withdrawal amount
      alert('Invalid input. Please enter valid numbers for balance and withdrawal amount.');
  }