const products = [
  { name: "Casual Dress", price: 999, img: "images/casual-dress.jpg" },
  { name: "Denim Jacket", price: 1499, img: "images/denim-jacket.jpg" },
  { name: "Summer Top", price: 599, img: "images/summer-top.jpg" }
];

const productList = document.getElementById("productList");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button>Add to Cart</button>
  `;

  div.querySelector("button").addEventListener("click", () => {
    alert(product.name + " added to cart");
  });

  productList.appendChild(div);
});

document.getElementById("shopBtn").addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});
