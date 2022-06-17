//Business Logic:

let pizza = {};
pizza.sizes = ["Large", "Medium", "Small"];
pizza.toppings = ["Pineapple", "Pepperoni", "Peperoccini", "Anchovies", "Black Olives"];

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price= price;
}