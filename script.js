let cart = [];

function addToCart(product) {
    cart.push(product);
    document.querySelector('.cart a').innerText = `Cart (${cart.length})`;
}

function removeFromCart(productIndex) {
    cart.splice(productIndex, 1);
    document.querySelector('.cart a').innerText = `Cart (${cart.length})`;
}