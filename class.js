class Blogger {
    name = "YouTube blogger";

    constructor({ email, age, numberOfPost, topics }) {
        this.email = email;
        this.age = age;
        this.numberOfPost = numberOfPost;
        this.topics = topics;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.numberOfPost} posts`;
    }
}

// const obj = new Blogger();
// console.log(obj);

const mango = new Blogger({
    email: 'mango@email.com',
    age: 24,
    numberOfPost: 20,
    topics: ['tech', 'cooking'],
});

console.log(mango.getInfo());

/*------------------STATIC-------------------------*/
class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high',
    }

    constructor(notes) {
        this.items = notes;
    }

    addNote(note) {
        this.items.push(note);
    }
}

const myNotes = new Notes([]);

myNotes.addNote({
    text: 'Моя перша нотатка',
    priority: Notes.Priority.LOW,
});

console.log(myNotes.items);


// class Car {
//   // Change code below this line
 
 
//     static MAX_PRICE = 50000;
//      #price;
  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//       if (newPrice <= Car.MAX_PRICE) {
//           this.#price = newPrice;
//       }}
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line

//     // Change code above this line
//     constructor({ price }) {
//         this.price = price;
//     }

//     static checkPrice(price) {
//         if (price > this.#MAX_PRICE) {
//             "Error! Price exceeds the maximum";
//         }
//         else "Success! Price is within acceptable limits";
  
//     };
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

/*-----------------КОПІЮВАННЯ ОБ'ЄКТІВ-------------------------*/
/*1 метод через деструктиризацію за допомогою спред оператора (...arg)*/
const copyObj = (obj) => ({ ...obj });
/* 2 метод за допомогою Object.assign({}, obj)*/
// const copyObj = (obj) => Object.assign({}, obj)
const user = { name: 'Iryna', age: 40 };
const copiedUser = copyObj(user);
console.log(copiedUser);
/*--------------------------------------------------------------*/
console.log(true + Number(""))