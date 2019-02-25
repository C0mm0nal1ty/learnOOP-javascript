//Source - https://www.rainerhahnekamp.com/en/javascript-and-object-oriented-programming/
//hint: esversion:6

function Product(_name, _price) {
  const name = _name;
  const price = _price;

  this.getName = function() {
    return name;
  };

  this.getPrice = function() {
    return price;
  };
}

function Basket() {
  const products = [];

  this.addProduct = function(amount, product) {
    products.push(...Array(amount).fill(product));
  };

  this.calcTotal = function() {
    return products
      .map(product => product.getPrice())
      .reduce((a, b) => a + b, 0);
  };

  this.printShoppingInfo = function() {
    console.log('one has to pay in total: ' + this.calcTotal());
  };
}





//EOL
