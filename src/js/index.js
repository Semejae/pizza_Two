import Pizza from './pizza.js';

// ui logic

window.addEventListener('load',function(){
  let myResults = document.getElementById('results');
  let input = this.document.getElementById('input');
  input.addEventListener('submit',function(event){
    event.preventDefault();
    const pizzaTopping = document.querySelector('#toppings').value;
    const pizzaSize = document.querySelector('#size').value;
    const customer = new Pizza(pizzaSize,pizzaTopping);
    customer.setPrice();
    customer.setToppingPrice();
    myResults.innerText = ('$' + customer.price + '.00');
  });
});