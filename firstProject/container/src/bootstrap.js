import { productMount } from 'products/ProductsIndex';
import { cartMount } from 'cart/CartShow';

productMount(document.querySelector('#dev-products'));
cartMount(document.querySelector('#dev-cart'));

console.log('Container!');
