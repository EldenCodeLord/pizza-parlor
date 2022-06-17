#_Ori's Pizzeria_#


#### _Online Pizza Parlor project


## Technologies Used

* JavaScript
* JQuery
* HTML
* CSS
* Boostrap
* Markdown
* Git
* GitHub

## Description

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.

## Tests
# _Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size".
Code: let pizza = {};
      pizza.sizes = ["Large", "Medium", "Small"];
      pizza.toppings = ["Pineapple", "Pepperoni", "Peperoccini", "Anchovies", "Black Olives"];
Expected Output: 
      pizza
      sizes: Array(3)
      0: "Large"
      1: "Medium"
      2: "Small"
      length: 3
      toppings: Array(5)
      0: "Pineapple"
      1: "Pepperoni"
      2: "Peperoccini"
      3: "Anchovies"
      4: "Black Olives"
      length: 5

Test: "Constructor for Pizza".
Code: function Pizza (size, toppings, price) {
      this.size = size;
      this.toppings = toppings;
      this.price= price;
    }
Expected Output: Pizza
      ƒ Pizza (size, toppings, price) {
      this.size = size;
      this.toppings = toppings;
      this.price= price;
    }

Test: "myNewPizza should return price, size, and toppings."
Code: let myNewPizza = new Pizza(pizza.size, pizza.toppings, pizza.price);
Expected Output : Pizza {size: Array(3), toppings: Array(5), price: Array(3)}price: (3) [22, 18, 14]size: (3) 
                  ['Large', 'Medium', 'Small']toppings: (5) ['Pineapple', 'Pepperoni', 'Peperoccini', 'Anchovies', 'Black Olives']
## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* 

## License

n/a

Copyright (c) _2022_ _Manuel Raygoza_