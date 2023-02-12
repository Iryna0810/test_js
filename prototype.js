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


/*---------------metod CALL-----------*/
function getDatta() {
    console.log(`${this.userName} is ${this.age} years old`)
}

const userFirst = {
    userName: 'Max',
    age: 29,
}
getDatta.call(userFirst);


/*-------------------metod APPLY------------------*/
function greetGuest(greeting) {
    console.log(`${greeting}, ${this.userName}.`);
}

const secondUser = {
    userName: 'Iryna',
    age: 40,
};

greetGuest.apply(secondUser, [`Hello`]);
/*або!!!*/
greetGuest.call(secondUser, `Hello`);

/*---------------------metod Bind---------------------*/
const fordAuto = {
    make: "Ford",
    mark: "Mondeo",
    wheels: 4,

    getInfo() {
        console.log(`${this.make} ${this.mark} has ${this.wheels} wheels.`);
},
};

fordAuto.getInfo();

/*--------------calculator--------------------*/
const calculator = {
    a: 0,
    b: 0,
    
    wright(a, b) {
        this.a = a;
        this.b = b;
    },
    getSum() {
        return this.a + this.b;
    },
    getMulty() {
        return this.a * this.b;
    },
};

calculator.wright(500, 700);
console.log(calculator);
console.log(calculator.getSum());

/*----------------------ladder-------------------------------*/

const ladder = {
    step: 0,

    up() {
        this.step += 1;

        return this;
    },
    down() {
        this.step -= 1;

         return this;
    },
    showStep() {
        console.log(this.step);
    },
};

ladder.up();
ladder.up();
ladder.up();
ladder.up();
ladder.down();

ladder.showStep();

// debugger;
ladder.up().up().up().showStep();

/*-------------------task---------------------*/
const chopShop = {
    stones: [
        { name: "Emerald", price: 1300, quantity: 4 },
        { name: "Diamond", price: 2700, quantity: 3 },
        { name: "Sapphire", price: 1400, quantity: 7 },
        { name: "Ruby", price: 800, quantity: 2 },
    ],

    calcTotalPrice(stoneName) {
        const stoneObj = this.stones.find(
        ({ name }) => name.toLowerCase() === stoneName.trim().toLowerCase());
     
        if (!stoneObj) {
            return `Каміння з назвою ${stoneName} не існує!`;
        }
        console.log(stoneObj);
        
        const { price, quantity } = stoneObj;
        return price * quantity;
    },
};


console.log(chopShop.calcTotalPrice("Emerald"));
console.log(chopShop.calcTotalPrice("Sapphire  "));


/*--------------------------------task------------------------------*/

class Storage  {
constructor (items) {
   this.items = items; 
  }
  getItems() {
return this.items;
}
addItem (newItem) {
    this.items.push(newItem);
}
removeItem = function (itemToRemove) {
const itemRemoveIndex = this.items.findIndex((item) => item === itemToRemove);
this.items.splice(itemRemoveIndex, 1);
  
}
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]