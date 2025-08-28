const pizzas = [
  { id: 1, name: "Margarita", price: 250000, img: "./pizza.png" },
  { id: 2, name: "Pepperoni", price: 300000, img: "./image.png " },
  { id: 3, name: "Go‘shtli", price: 350000, img: "./imagee.png" },
  { id: 4, name: "Qo‘ziqorinli", price: 270000, img: "./imageee.png" }
];

let cart = [];

const pizzaList = document.getElementById("pizzaList");
pizzas.forEach(pizza => {
  const div = document.createElement("div");
  div.className = "pizza";
  div.innerHTML = `
    <img src="${pizza.img}" alt="${pizza.name}">
    <h3>${pizza.name}</h3>
    <p>${pizza.price} so'm</p>
    <button onclick="addToCart(${pizza.id})">Qo‘shish</button>
  `;
  pizzaList.appendChild(div);
});


function addToCart(id) {
  const pizza = pizzas.find(p => p.id === id);
  cart.push(pizza);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}

const cartBtn = document.getElementById("cartBtn");
const cartPage = document.getElementById("cartPage");
const backBtn = document.getElementById("backBtn");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const emptyCart = document.getElementById("emptyCart");

cartBtn.addEventListener("click", () => {
  pizzaList.classList.add("hidden");
  cartPage.classList.remove("hidden");
  renderCart();
});

backBtn.addEventListener("click", () => {
  pizzaList.classList.remove("hidden");
  cartPage.classList.add("hidden");
});

function renderCart() {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    emptyCart.style.display = "block";
  } else {
    emptyCart.style.display = "none";
    let total = 0;
    cart.forEach((p, i) => {
      total += p.price;
      const item = document.createElement("div");
      item.textContent = `${p.name} - ${p.price} so'm`;
      cartItems.appendChild(item);
    });
    totalPrice.textContent = total;
  }
}

// Tozalash tugmasi
document.getElementById("clearCart").addEventListener("click", () => {
  cart = [];
  updateCartCount();
  renderCart();
});
