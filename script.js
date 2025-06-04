// ✅ Real Slideshow
const images = [
  "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800"
];
let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slideshow-image").src = images[i];
}, 3000);

// ✅ Cart System
const cart = [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");

document.querySelectorAll("button[data-name]").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    addToCart(name, price);
  });
});

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

function updateCartDisplay() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button onclick="removeItem('${item.name}')">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function removeItem(name) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);
    updateCartDisplay();
  }
}

function clearCart() {
  cart.length = 0;
  updateCartDisplay();
}
