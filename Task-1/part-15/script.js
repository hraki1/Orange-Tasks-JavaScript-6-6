// Prompt the user to input exam grades for three subjects
const grade1 = parseFloat(prompt("Enter your grade for subject 1:"));
const grade2 = parseFloat(prompt("Enter your grade for subject 2:"));
const grade3 = parseFloat(prompt("Enter your grade for subject 3:"));

// Calculate the average grade
const averageGrade = (grade1 + grade2 + grade3) / 3;

// Determine if the student passes or fails based on the average grade
let result;
if (averageGrade >= 60) {
  result = "Pass";
} else {
  result = "Fail";
}

// Display the average grade and the result
alert(`Your average grade is ${averageGrade.toFixed(2)}. You ${result}.`);
