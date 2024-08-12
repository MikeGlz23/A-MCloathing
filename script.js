document.addEventListener('DOMContentLoaded', (event) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        addToCart(product);
      });
    });
  
    const addToCart = (product) => {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product} ha sido agregado al carrito.`);
    };
  
    const updateCartCount = () => {
      cartCountElement.textContent = cart.length;
    };
  
    updateCartCount();
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        addToCart(product);
      });
    });
  
    const addToCart = (product) => {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product} ha sido agregado al carrito.`);
    };
  
    const updateCartCount = () => {
      if (cartCountElement) {
        cartCountElement.textContent = cart.length;
      }
    };
  
    updateCartCount();
  });
  