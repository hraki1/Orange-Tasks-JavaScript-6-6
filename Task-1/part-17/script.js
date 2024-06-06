   // Prompt the user to input the current color of the traffic light
   const color = prompt("Enter the current color of the traffic light (Red, Yellow, Green):").toLowerCase();

   // Determine the action based on the color of the traffic light
   let action;
   if (color === "red") {
       action = "Stop";
   } else if (color === "yellow") {
       action = "Slow down";
   } else if (color === "green") {
       action = "Go";
   } else {
       action = "Invalid color. Please enter Red, Yellow, or Green.";
   }

   // Display the appropriate action
   alert(action);