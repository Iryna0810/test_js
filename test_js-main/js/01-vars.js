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

function getExtremeElements(array) {
  // Change code below this line
const lastElementIndex = array.length - 2;
  // Change code above this line
  const deletedClients = array.splice(1, lastElementIndex);
return array;
}
//  for (let i = 1; i < lastElementIndex; i += 1) {
//     return array[i];
//   }
// }
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));


function getSum() {
  console.log(arguments);
  let sum = 0;

  for (let number of arguments) {
    sum += number;
  }

  return sum;
}

const sum1 = getSum(100, 500, 420, 631, 46, 4545);
console.log(sum1);


function findLongestWord(string) {
  // Change code below this line
const stringArray = string.split(" ");
  // console.log(stringArray);
  let longestWord = stringArray[0];
  // const arrayLength = stringArray.length - 1;
  
  for (const wordArray of stringArray) {
    // let wordArray = "";
    if (longestWord.length > wordArray.length) {
      continue;
    }
    longestWord = wordArray;
    return longestWord;
  }
 

  // Change code above this line
}
console.table(findLongestWord("The quick brown fox jumped over the lazy dog"));