var products = {
  1: { name: 'Pipe 1', price: 1299, img: '/img/pipa1.png' },
  2: { name: 'Pipe 2', price: 1799, img: '/img/pipa2.png' },
  3: { name: 'Pipe 3', price:  999, img: '/img/pipa3.png' },
  4: { name: 'Pipe 4', price: 2499, img: '/img/pipa4.png' },
  5: { name: 'Pipe 5', price: 1599, img: '/img/pipa5.png' },
  6: { name: 'Pipe 6', price: 1099, img: '/img/marijanapipes.png' }
};

var cart = {};

function addToCart(id) {
  if (cart[id]) {
    cart[id] = cart[id] + 1;
  } else {
    cart[id] = 1;
  }
  renderCart();
}

function removeFromCart(id) {
  delete cart[id];
  renderCart();
}

function clearCart() {
  cart = {};
  renderCart();
}

function toggleCart() {
  var cartEl = document.getElementById('cart');
  if (cartEl.style.display === 'block') {
    cartEl.style.display = 'none';
  } else {
    cartEl.style.display = 'block';
  }
}

function renderCart() {  /* Ai hjälpte */
  var ids = Object.keys(cart);
  var total = 0;
  var html = '';

  if (ids.length === 0) {
    html = '<p>Your cart is empty.</p>';
  } else {
    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      var p = products[id];
      var qty = cart[id];
      total = total + p.price * qty;
      html += '<div class="cart-item">';
      html += '<img src="' + p.img + '" alt="' + p.name + '" />';
      html += p.name + ' x' + qty;
      html += ' <button onclick="removeFromCart(' + id + ')">Remove</button>';
      html += '</div>';
    }
  }

  document.getElementById('cartItems').innerHTML = html;
  document.getElementById('cartTotal').textContent = 'SEK ' + total;
  document.getElementById('cartCount').textContent = ids.length;
}
