document.addEventListener('DOMContentLoaded', (event) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');
  
    const updateCartCount = () => {
      cartCountElement.textContent = cart.length;
    };
  
    const displayCartItems = () => {
      cartItemsContainer.innerHTML = '';
      cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.textContent = `${item} - $20`; // Assume each item costs $20 for this example
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.className = 'btn remove-item';
        removeButton.addEventListener('click', () => {
          removeCartItem(index);
        });
        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);
      });
    };
  
    const removeCartItem = (index) => {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCartItems();
      updateCartCount();
    };
  
    const handleCheckout = () => {
      if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
      }
  
      // Aquí puedes integrar un proceso de pago real
      alert('Gracias por su compra!');
      localStorage.removeItem('cart');
      displayCartItems();
      updateCartCount();
    };
  
    checkoutButton.addEventListener('click', handleCheckout);
  
    updateCartCount();
    displayCartItems();
  });
  