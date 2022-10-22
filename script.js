let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchform.classList.toggle('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active');
}
