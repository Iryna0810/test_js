const animal = {
  legs: 4,
};
// const dog = Object.create(animal);
// dog.name = "Манго";

const dog = Object.create(animal);
dog.name = 'Манго';
dog.barks = true;
console.log(dog.hasOwnProperty('name'))
// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4

const objA = {
    a: 5,
    b: 10,
}

const objB = Object.create(objA);
objB.c = 100;
console.log(objB);
console.log(objB.hasOwnProperty('c'));
console.log(objB.hasOwnProperty('a'));

const Car = function ({ brand, model, price } = {}) {
    /* 2. функция візіваеться в контексте созданого обьекта, то есть в this 
    записіваеться ссілка на него*/
    this.brand = brand;
    this.model = model;
    this.price = price;
    /* 3. в свойство this._proto_ записіваеться ссілка на обьект Car.prototype*/
    /* 4. ccілка на обьект возвращаеться через new, создаеться пустой обьект*/

    this.changePrice = function (newPrice) {
        this.price = newPrice;
    }
}

Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi -> this', this);
};

console.log(Car.prototype);
/*1. если функция візіваеться через new візіваеться пустой обьект*/

const myCar = new Car({
    brand: 'Audi',
    model: 'q3',
    price: 32000,
});

myCar.sayHi();
myCar.changePrice(10000);


const myCar2 = new Car({
    brand: 'Hyundai',
    model: 'Accent',
    price: 15000,
});

const myCar3 = new Car({
    brand: 'BMW',
    model: 'A5',
    price: 24000,
});

console.log(myCar);
console.log(myCar2);
console.log(myCar3);