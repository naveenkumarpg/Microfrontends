import faker from 'faker';

function cartMount(el) {
  const cartText = `<h1>Shopping Cart</h1> <div>You have ${faker.random.number()} items in your cart</div>`;

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-cart');

  // Checking if the devRoot exists
  // If it exists, we mount the component
  if (devRoot) {
    // Running the mount function which will do only at the time of development
    cartMount(devRoot);
  }
}

export { cartMount };
