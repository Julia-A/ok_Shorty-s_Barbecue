document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const itemModal = new bootstrap.Modal(document.getElementById('itemModal'));
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    let currentItem = null;

    document.querySelectorAll('.individual-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('.price-and-tag p:nth-child(2)').innerText;
            const price = item.querySelector('#price').innerText;

            currentItem = { name, price };

            document.getElementById('itemTitle').innerText = name;
            document.getElementById('itemPrice').innerText = price;

            itemModal.show();
        });
    });

    document.getElementById('addToCartButton').addEventListener('click', () => {
        if (currentItem) {
            cart.push(currentItem);
            cartCount.innerText = cart.length;
            itemModal.hide();
        }
    });

    document.getElementById('cart-icon').addEventListener('click', () => {
        const cartItemsContainer = document.getElementById('cartItems');
        cartItemsContainer.innerHTML = ''; // Clear existing items

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `<p>${item.name} - ${item.price}</p>`;
                cartItemsContainer.appendChild(itemElement);
            });
        }

        cartModal.show();
    });
});
