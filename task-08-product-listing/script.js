// Product data array
const products = [
{
    // Products
name:"Wireless Headphones",
price:8500,
category:"Electronics",
description:"Premium wireless headphones with crystal-clear sound quality, noise cancellation technology, comfortable ear cushions, and long-lasting battery life for music, gaming, and calls.",
image:"images/headphones.jpg"
},
{
name:"Smart Watch",
price:12000,
category:"Electronics",
description:"Modern smartwatch featuring fitness tracking, heart rate monitoring, sleep analysis, notification alerts, and a stylish design suitable for everyday use.",
image:"images/watch.jpg"
},
{
name:"Bluetooth Speaker",
price:6500,
category:"Electronics",
description:"Portable Bluetooth speaker with powerful bass, high-quality sound, rechargeable battery, and wireless connectivity for indoor and outdoor entertainment.",
image:"images/speaker.jpg"
},
{
name:"Running Shoes",
price:9500,
category:"Shoes",
description:"Lightweight and comfortable running shoes designed with breathable material, excellent grip, and cushioned soles for sports and daily activities.",
image:"images/running-shoes.jpg"
},
{
name:"Sneakers",
price:10500,
category:"Shoes",
description:"Stylish sneakers crafted with durable materials, modern design, and superior comfort, making them perfect for casual wear and outings.",
image:"images/sneakers.jpg"
},
{
name:"Cotton T-Shirt",
price:3500,
category:"Clothing",
description:"Soft and breathable cotton T-shirt with a comfortable fit, suitable for daily wear, casual events, and all-day comfort.",
image:"images/tshirt.jpg"
},
{
name:"Winter Hoodie",
price:4500,
category:"Clothing",
description:"Warm and fashionable hoodie made from premium fabric, providing comfort and protection during chilly weather while maintaining a trendy look.",
image:"images/hoodie.jpg"
},
{
name:"Travel Backpack",
price:5500,
category:"Accessories",
description:"Spacious backpack with multiple compartments, durable zippers, and ergonomic shoulder straps, ideal for school, work, travel, and outdoor activities.",
image:"images/backpack.jpg"
},
{
name:"Laptop Bag",
price:4800,
category:"Accessories",
description:"Professional laptop bag with padded protection, organized storage compartments, and a sleek design for carrying laptops and accessories securely.",
image:"images/laptopbag.jpg"
},
{
name:"UV Protection Sunglasses",
price:4000,
category:"Accessories",
description:"Elegant sunglasses with UV-protected lenses, lightweight frame, and modern styling, offering both eye protection and fashion.",
image:"images/sunglasses.jpg"
},
{
name:"Smart LED Lamp",
price:4200,
category:"Electronics",
description:"Modern smart LED lamp with touch control, color changing modes, and mobile app support for mood lighting.",
image:"images/led-lamp.jpg"
},
{
name:"Mini Portable Projector",
price:18500,
category:"Electronics",
description:"Pocket-sized projector that supports HD video playback, ideal for movies, presentations, and home entertainment.",
image:"images/projector.jpg"
},
{
name:"Aesthetic Desk Setup Kit",
price:9500,
category:"Accessories",
description:"Complete desk aesthetic kit including LED lights, organizer, mouse pad, and decorative items for a modern workspace.",
image:"images/desk-kit.jpg"
},
{
name:"Digital Alarm Clock",
price:3200,
category:"Electronics",
description:"LED digital alarm clock with temperature display, night mode, and USB charging port.",
image:"images/alarm-clock.jpg"
},
{
name:"Travel Organizer Pouch",
price:1800,
category:"Accessories",
description:"Multi-compartment travel pouch to organize chargers, cables, cosmetics, and small essentials neatly.",
image:"images/travel-pouch.jpg"
}
];

// Select DOM(Doccument Object Model) Elements
const productsContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

// Display products on the Website page

function displayProducts(items){
productsContainer.innerHTML="";

items.forEach(product=>{
productsContainer.innerHTML += `
<div class="card">
<img src="${product.image}" alt="${product.name}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="price">PKR ${product.price.toLocaleString()}</p>
<p class="category">${product.category}</p>
<p>${product.description}</p>
</div>
</div>
`;
});
}

// Apply search, category filter , and price sorting

function filterProducts(){
let filtered = [...products];

const searchValue = searchInput.value.toLowerCase();
filtered = filtered.filter(product =>
product.name.toLowerCase().includes(searchValue)
);

if(categoryFilter.value !== "all"){
filtered = filtered.filter(product =>
product.category === categoryFilter.value
);
}

if(sortPrice.value === "low-high"){
filtered.sort((a,b)=>a.price-b.price);
}
else if(sortPrice.value === "high-low"){
filtered.sort((a,b)=>b.price-a.price);
}

displayProducts(filtered);
}

// Event listeners for user interactions
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
sortPrice.addEventListener("change", filterProducts);

// Initial product display
displayProducts(products);