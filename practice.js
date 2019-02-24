function Person(name){
  this.name = name;
  this.greeting= function (){
    console.log('Hi! I\'m ' + this.name + '.');
  }
}

let salva = new Person('Salva');
let sarah = new Person('Sarah');

salva.name;
salva.greeting();

sarah.name;
sarah.greeting();
