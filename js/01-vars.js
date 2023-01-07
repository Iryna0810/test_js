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
}

console.log(add(15, 27, 10));

