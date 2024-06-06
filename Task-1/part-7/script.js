// Prompt the user for the temperature in Celsius
let cartAmount = parseFloat(prompt("Enter the ShopingCart Amount:"));

if (!isNaN(cartAmount)) {
  if (cartAmount >= 100 && cartAmount < 200) {
    let discount = cartAmount * 0.1;
    cartAmount -= discount;
    alert(`The amount ater dicount is ${cartAmount.toFixed(2)}`);
  } else if (cartAmount >= 200) {
    let discount = cartAmount * 0.2;
    cartAmount -= discount;
    alert(`The amount ater dicount is ${cartAmount.toFixed(2)}`);
  }
}
