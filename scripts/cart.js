let cart = [];

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function updateQuantity(itemId, quantity) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity = parseInt(quantity, 10);
        updateCart();
    }
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const subtotalElement = document.getElementById('subtotal');
    const emptyCartMessage = document.getElementById('empty-cart-message');

    cartItemsContainer.innerHTML = '';

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        subtotal += item.price * item.quantity;

        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
            </div>
            <div class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    totalItemsElement.textContent = totalItems;
    subtotalElement.textContent = subtotal.toFixed(2);

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        emptyCartMessage.style.display = 'none';
    }
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});
