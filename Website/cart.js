document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('products');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalSpan = document.getElementById('total');
  
    // Sample product data (you'd typically fetch this from a server)
    const products = [
      { id: 1, name: 'Product 1', price: 20.00 },
      { id: 2, name: 'Product 2', price: 30.00 },
      // Add more products as needed
    ];
  
    // Populate product cards
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product';
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})" style : backgroundColor : red>Add to Cart</button>`;
      productsContainer.appendChild(productCard);
    });
  
    // Function to add items to the cart
    window.addToCart = function (id, name, price) {
      const cartItem = document.createElement('li');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <span>${name}</span>
        <span>$${price.toFixed(2)}</span>
      `;
      cartItemsContainer.appendChild(cartItem);
  
      // Update the total
      updateTotal(price);
    };
  
    // Function to update the total
    function updateTotal(amount) {
      const currentTotal = parseFloat(totalSpan.innerText);
      const newTotal = currentTotal + amount;
      totalSpan.innerText = newTotal.toFixed(2);
    }
  });
  