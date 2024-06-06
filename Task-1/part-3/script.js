// Prompt the user for their exam score
let score = parseFloat(prompt("Enter your exam score:"));

// Check if the input is a valid number
if (!isNaN(score) && score >= 0 && score <= 100) {
  // Define the threshold for bonus assignment
  const bonusThreshold = 70;
  const bonusPoints = 5;

  // Check if the score is above the threshold
  if (score > bonusThreshold) {
    // Ask if the user completed any bonus assignments
    const completedBonus = confirm("Did you complete any bonus assignments?");

    // Adjust the score based on the bonus
    if (completedBonus) {
      score += bonusPoints;
      // Ensure the score does not exceed 100
      if (score > 100) {
        score = 100;
      }
    }
  }

  // Determine the academic grade
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display the result using alert
  alert(
    `Your adjusted score is ${score.toFixed(
      2
    )}. Your academic grade is: ${grade}`
  );
} else {
  alert("Invalid input. Please enter a valid score between 0 and 100.");
}
