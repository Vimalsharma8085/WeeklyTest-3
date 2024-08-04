const products = [
    {id: 1, name: 'Product-1', price: 100},
    {id: 2, name: 'Product-2', price: 200},
    {id: 3, name: 'Product-3', price: 300},
];

let cart = [];

function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">+</button>
            <span id="quantity-${product.id}">0</span>
            <button onclick="removeFromCart(${product.id})">-</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    const totalDiv = document.getElementById('total');
    cartDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.quantity * item.price;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${item.name} - ${item.quantity} x $${item.price}</span>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
    totalDiv.innerHTML = `Total Price: $${total}`;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    document.getElementById(`quantity-${productId}`).innerText = cartItem ? cartItem.quantity : 1;
    displayCart();}
