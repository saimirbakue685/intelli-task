// filename: complex_code.js

/*
This code is an example of a complex application that simulates an online shopping platform.
The application manages products, users, shopping carts, and orders, and handles various operations
such as adding products to the cart, processing payments, and generating invoices.

Note: This code is for demonstration purposes only and not intended for a production environment.
*/

// Define Product class
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  showDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
  }
}

// Define User class
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  showDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
  }
}

// Define ShoppingCart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter(product => product.id !== productId);
  }

  getTotalPrice() {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  checkout(user) {
    if (this.products.length === 0) {
      console.log("Cannot checkout an empty shopping cart.");
      return;
    }

    console.log(`Processing payment for user: ${user.name}`);
    console.log(`Total Price: $${this.getTotalPrice()}`);

    // Simulate payment processing...

    console.log("Payment processed successfully. Generating invoice...");
    this.generateInvoice(user);
  }

  generateInvoice(user) {
    console.log("Invoice:");
    console.log(`Customer: ${user.name}`);
    console.log("Products:");
    this.products.forEach(product => {
      console.log(`${product.name} - $${product.price} x ${product.quantity}`);
    });
    console.log(`Total Price: $${this.getTotalPrice()}`);
    console.log("Thank you for your purchase!");
  }
}

// Main execution

// Create a few products
const product1 = new Product(1, "Product 1", 10.99, 2);
const product2 = new Product(2, "Product 2", 5.99, 1);
const product3 = new Product(3, "Product 3", 20.99, 3);

// Create a user
const user = new User(1, "John Doe", "john@example.com");

// Create a shopping cart
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Remove a product from the cart
cart.removeProduct(2);

// Display the current state of the cart
console.log("Shopping Cart:");
cart.products.forEach(product => {
  product.showDetails();
});

// Checkout and generate invoice
cart.checkout(user);