   // Predefined username and password
   const validUsername = "user123";
   const validPassword = "password123";

   // Prompt the user to input their username
   const username = prompt("Enter your username:");

   // Check if the username is valid
   if (username === validUsername) {
       // Prompt the user to input their password if the username is valid
       const password = prompt("Enter your password:");

       // Check if the password is valid
       if (password === validPassword) {
           // Display a message for successful login
           alert("Login successful. Welcome, " + validUsername + "!");
       } else {
           // Display a message for incorrect password
           alert("Incorrect password. Please try again.");
       }
   } else {
       // Display a message for incorrect username
       alert("Username not found. Please try again.");
   }