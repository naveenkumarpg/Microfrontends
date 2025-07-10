import faker from 'faker';

let products = '<h1>Products</h1>';

for (let i = 0; i < 10; i++) {
  const name = faker.commerce.productName();
  const price = faker.commerce.price();
  const description = faker.commerce.productDescription();
  const category = faker.commerce.department();

  products += `<div>${name} <br/> ${price} <br/> ${description} <br/> ${category}</div>`;
}

document.querySelector('#dev-products').innerHTML = products;
