import faker from 'faker';

function productMount(el) {
  let products = '<h1>Products</h1>';

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    const price = faker.commerce.price();
    const description = faker.commerce.productDescription();
    const category = faker.commerce.department();

    products += `<div>${name} <br/> ${price} <br/> ${description} <br/> ${category}</div>`;
  }

  el.innerHTML = products;
}

// Case 1 what if does have not have #dev-products on host page
// Case 2 what if does have #dev-products on host page

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-products');

  // Checking if the devRoot exists
  // If it exists, we mount the component
  if (devRoot) {
    // Running the mount function which will do only at the time of development
    productMount(devRoot);
  }
}

export { productMount };
