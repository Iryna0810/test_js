const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать';
const isOpen = true;
const shouldConfirm = false;

console.log('Price', totalPrice, message);
const type = typeof isOpen;
console.log(type)


// console.log('Before');
// alert('gjreiot0wer9');
// console.log('After')

// const shouldRenew = confirm('Do you want to determinate subscribe');
// console.log(shouldRenew);

// let quantity = prompt('Enter the quantity of goods');
// // quantity = Number(quantity);
// console.log(quantity);
// // console.log(typeof quantity);

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth', elementWidth);

/* метод Number.parseFloat */
// let elementHeight = '200.2452px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log(elementHeight);

let salary = 1300.15896;
console.log(Number(salary.toFixed(2)));

// salary = salary.toFixed(2);
// console.log(typeof salary);
// salary = Number(salary);
// // console.log(salary.toFixed());
// console.log(salary);
// console.log(typeof salary);

// salary = Number(salary.toFixed(2));
// console.log(salary);
function sayHi() {
  console.log("Hello, this is my first function!")
}

const guestName = 'Iryna Vakulenko';
const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
    console.log(greeting);

const productName = 'Repair droid';
console.log(productName.slice(2, 13));

sayHi();



function multiply(x, y, z) {
  // console.log("Код до return виконується звичайним чином");

  // Повертаємо результат виразу множення
  return x + y + z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}
let result = multiply(2, 3, 5);
console.log(result);

result = multiply(17, 6, 25);
console.log(result);

result = multiply(25,30,6);
console.log(result);

function add(a, b, c) {
return a + b + c;
};

console.log(add(15, 27, 10));

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(-4));

// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);

// const clients = ["Mango", "Ajax", "Poly"];
// const lastIndexClients = clients.length -2;
// const deletedClients = clients.splice(1, lastIndexClients);
// console.log(deletedClients);
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[0]&&clients[lastIndexClients]);
// }
// for (client of clients)
// console.log (`${clients[0]}, ${clients[lastIndexClients]}`);

// function getExtremeElements(array) {
//   // Change code below this line
// const lastElementIndex = array.length - 2;
//   // Change code above this line
//   const deletedClients = array.splice(1, lastElementIndex);
// return array;
// }
// //  for (let i = 1; i < lastElementIndex; i += 1) {
// //     return array[i];
// //   }
// // }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


// function getSum() {
//   console.log(arguments);
//   let sum = 0;

//   for (let number of arguments) {
//     sum += number;
//   }

//   return sum;
// }

// const sum1 = getSum(100, 500, 420, 631, 46, 4545);
// console.log(sum1);


// function findLongestWord(string) {
//   // Change code below this line
// const stringArray = string.split(" ");
//   // console.log(stringArray);
//   let longestWord = stringArray[0];
//   // const arrayLength = stringArray.length - 1;
  
//   for (const wordArray of stringArray) {
//     // let wordArray = "";
//     if (longestWord.length > wordArray.length) {
//       continue;
//     }
//     longestWord = wordArray;
//     return longestWord;
//   }
 

//   // Change code above this line
// }
// console.table(findLongestWord("The quick brown fox jumped over the lazy dog"));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
// console.log(key);
//   console.log(apartment[key]);
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

const a = { x:1, y:2, g:{ hello: 'World' }, };
const b = { x:0, z:3 };
// const c = Object.assign({}, a, b);

const c = {
  ...a, 
  x: 12,
  ...b,
  y:20,
}
console.log(c);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let propArray = [];
// function getAllPropValues(propName) {
//   for (const product of products) {
//     const { name } = product;
//     console.log(name);
//      if (propName === name)
//       propArray.push(product.key);
//     return propArray;
//   }
  
// }
// console.log(getAllPropValues("price"));

// const product = {
//   username: "Radar",
//   price: 1300,
//   quantity: 4
// };
// const { username, price, quantity } = product;

// console.log(price);

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];



// function getAllPropValues(propName) {

//   let propArray = [];
//   for (let product of products) {
//     if (Object.keys(product).includes(propName))
//       propArray.push(product[propName])
//   }
//   return propArray;
// }
// console.log(getAllPropValues('price'));
 


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
// //   // Change code below this line
// // const {name,price} = newPotion
  
//   getPotions() {
//     const { potions } = this;
//     return potions;
//   },

//   addPotion(newPotion) {   
//     const { potions } = this;
//     for (let potion of potions) {
//        const {name} = potion;
//        if (newPotion === name ) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//     potions.push(newPotion);
//     }
//   },
  
  // removePotion(potionName) {
  //   const { potions } = this;
  //  for (let i = 0; i < potions.length; i +=1){
  //   const { name } = potions(i);
  //   const potionIndex = potions(i).indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }
  //  }
  // potions.splice(potionIndex, 1);
  // },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Dragon teeth"));
// console.table(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion("Green apple"));
// console.log(atTheOldToad.potions);