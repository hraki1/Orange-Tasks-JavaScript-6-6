        // Prompt the user to input a number representing the days of the week
        const dayNumber = parseInt(prompt("Enter a number from 1 to 7 representing the day of the week:"), 10);

        // Determine the corresponding day of the week
        let day;
        if (dayNumber === 1) {
            day = "Monday";
        } else if (dayNumber === 2) {
            day = "Tuesday";
        } else if (dayNumber === 3) {
            day = "Wednesday";
        } else if (dayNumber === 4) {
            day = "Thursday";
        } else if (dayNumber === 5) {
            day = "Friday";
        } else if (dayNumber === 6) {
            day = "Saturday";
        } else if (dayNumber === 7) {
            day = "Sunday";
        } else {
            day = "Invalid input. Please enter a number from 1 to 7.";
        }

        // Display the corresponding day of the week
        alert(day);