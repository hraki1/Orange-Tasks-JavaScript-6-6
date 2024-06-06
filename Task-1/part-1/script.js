    // Prompt the user for weight in kilograms
    const weight = parseFloat(prompt("Enter your weight in kilograms:"));
        
    // Prompt the user for height in meters
    const height = parseFloat(prompt("Enter your height in meters:"));

    // Check if the inputs are valid numbers
    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        // Calculate BMI
        const bmi = weight / (height * height);

        // Determine BMI category
        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        // Display the result using alert
        alert(`Your BMI is ${bmi.toFixed(2)}. You are classified as: ${category}`);
    } else {
        alert('Invalid input. Please enter valid numbers for weight and height.');
    }