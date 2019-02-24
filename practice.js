//Creating a person
//simulating polymorphism by changing the input parameters
//encapsulating the data inside the person class
//abstracting whats inside the person class from the user



function Person(first,last,age,gender,interests){
  this.name = {'first': first, 'last': last};
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  let outputgender = gender.toUpperCase() == 'MALE' ? 'He' : 'She';
  let interests_string = interests.join(' ').replace(/ /g, ' and ')

  this.bio = function (){
    console.log(this.name.first + ' ' + this.name.last + ' ' +
    this.age + ' years old.' + outputgender + ' likes ' + interests_string
    + '.');
  }

  this.greeting = function() {
    console.log('Hi I\'m ' + this.name.first + '.');
  }
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing', 'hiking','cooking','traveling']);

person1['age'];
person1.interests[1];
person1.bio();

let person2 = new Person('Angela', 'Smith', 32, 'female', ['music', 'skiing']);

person2['age'];
person2.interests[1];
person2.bio();

//Another way to create an object is with the object constructor

console.log('-------------');
let newperson = new Object();

newperson.name = 'Chris';
newperson['age'] = 38;
newperson.greeting = function(){
  console.log('Hi I\'m ' + this.name + '.');
}

let newperson2 = Object.create(newperson);
newperson2.name = 'James';
newperson2.greeting();





//EOF
