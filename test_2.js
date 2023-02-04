function greet(name) {
  return console.log(`Ласкаво просимо ${name}.`);
}

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Манго")); // Ласкаво просимо Манго.

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

console.log(greet);
console.log(greet("Iryna"));
greet('Iryna');

// function graet (name) {
//   console.log(`Вітаємо ${name}!`);
// }

// graet ('Iryna Vakulenko');

// const a = graet;
// const b = graet(NamedNodeMap);
//  console.log(a);
// //  console.log(b);

// function great (name) {
//   console.log(`Вітаємо ${name}!`);
// }
//  function registerName (name, callback){
//   console.log(`Реєструємо гостя ${name}!`);
//   callback(name);
//  }

//  registerName("Iryna", great);


 function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
// function makeMessage(pizzaName, callback) {
// return callback(pizzaName);
// }

function makeMessage(pizzaName, callback) {
return callback(pizzaName);
};

makeMessage('Royal Grand', makePizza);

makeMessage('Ultracheese', deliverPizza);
let totalArray = [];
const firstNumbers = [25, 22, 456, 789, 3];
const numbers = [22, 5, 6667, 456, 89];

numbers.forEach((number, index) => {
  console.log(number);
  if (firstNumbers.includes(number)) {
    totalArray.push(number);
  }
  return totalArray;
});
console.table(totalArray);

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  firstArray.forEach((element, index) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

   return commonElements;
};
  console.table(getCommonElements([1, 2, 3], [2, 4]));