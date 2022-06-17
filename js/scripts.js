//Business Logic:
function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price= price;
}
let pizza = {};
pizza.size = ["Large", "Medium", "Small"];
pizza.toppings = ["Pineapple", "Pepperoni", "Peperoccini", "Anchovies", "Black Olives"];
pizza.price = [22, 18, 14]; 

let myNewPizza = new Pizza(pizza.size, pizza.toppings, pizza.price);

Pizza.prototype.chooseToppings = function () {
    this.toppings = chooseToppings(pizza.toppings);
}

Pizza.prototype.chooseSize = function () {
  this.size = chooseSize(pizza.size);
}

Pizza.prototype.completePizza = function (chooseToppings, chooseSize) {
  if (pizza.chooseToppings >= 3) {
    return "Toppings Complete!";
  } else if 
    return "Just Cheese?"; { 
  } else if  (pizza.chooseSize === size) { 
    return (size);
  }
  
}

//User Interface (Ui)Logic:

$()