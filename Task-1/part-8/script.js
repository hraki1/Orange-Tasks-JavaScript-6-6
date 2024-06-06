let passwoed = prompt("Enter the password:");

if (passwoed.length > 0 && passwoed.length <= 5) {
  alert("Weak Password");
} else if (passwoed.length > 5 && passwoed.length <= 8) {
  alert("Moderate Password");
}
else if (passwoed.length > 8) {
  alert("Strong Password");
}

