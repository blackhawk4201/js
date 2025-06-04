// Slideshow functionality
const images = [
  "https://via.placeholder.com/800x300?text=Welcome+to+My+Store",
  "https://via.placeholder.com/800x300?text=New+Arrivals",
  "https://via.placeholder.com/800x300?text=Best+Deals"
];
let i = 0;

setInterval(() => {
  i = (i + 1) % images.length;
  document.getElementById("slide").src = images[i];
}, 3000);

// Add to cart button alert
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
