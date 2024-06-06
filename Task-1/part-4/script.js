// Prompt the user for values of x and y
const x = parseFloat(prompt("Enter the First Number:"));
const y = parseFloat(prompt("Enter the Second Number"));
const z = parseFloat(prompt("Enter the Third Number"));

// Compare x and y and display the appropriate message

if (x > y) {
  if (x > z) {
    alert("First Number is The Largest " + x);
    console.log("First Number is The Largest " + x);
  } else {
    alert("Third Number is The Largest " + z);
    console.log("Third Number is The Largest " + z);
  }
} else if (y > x) {
  if (y > z) {
    alert("Second Number is The Largest " + y);
    console.log("Second Number is The Largest " + y);
  } else {
    alert("Third Number is The Largest " + z);
    console.log("Third Number is The Largest " + z);
  }
} else {
  if (z > x) {
    alert("Third Number is The Largest " + z);
    console.log("Third Number is The Largest " + z);
  } else {
    alert("All Numbers Are Equals");
    console.log("All Numbers Are Equals");
  }
}
