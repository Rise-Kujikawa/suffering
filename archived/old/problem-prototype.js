function Animal(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  Animal.prototype.makeSound = function() {
    console.log(this.name + " издает звук");
  };
  function Dog(name, breed) {
    Animal.call(this, name, breed);
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.makeSound = function() {
    console.log(this.name + " лает");
  };
  function Cat(name, breed) {
    Animal.call(this, name, breed);
  }
  Cat.prototype = Object.create(Animal.prototype);
  Cat.prototype.makeSound = function() {
    console.log(this.name + " мяукает");
  };
  function Tiger(name, breed) {
    Animal.call(this, name, breed);
  }
  Tiger.prototype = Object.create(Animal.prototype);
  Tiger.prototype.makeSound = function() {
    console.log(this.name + " рычит");
  };
  function Cow(name, breed) {
    Animal.call(this, name, breed);
  }
  Cow.prototype = Object.create(Animal.prototype);
  Cow.prototype.makeSound = function() {
    console.log(this.name + " мычит");
  };
  const dog = new Dog("Собака");
  const cat = new Cat("Кот");
  const tiger = new Tiger("Тигр");
  const cow = new Cow("Корова");
  dog.makeSound();
  cat.makeSound();
  tiger.makeSound();
  cow.makeSound();