// Колбек-функція
function greet(name) {
    console.log(`Реєструємо гостя ${name}`)
}

// Функція вищого порядку
function registerGuest (name, callback) {
    console.log(`Ласкаво просимо ${name}`);
    callback(name);
}

registerGuest("Манго", greet);

const productData = [
{ name: 'apple', price: 100, quantity: 5 },
{ name: 'limon', price: 150, quantity: 15 },
{ name: 'pear', price: 100, quantity: 5 },
{ name: 'orange', price: 100, quantity: 5 },
{ name: 'plum', price: 100, quantity: 5 },
]
    

function handleProduct(productData, callback) {
    callback(productData);
    logProduct(productData);
}

// function logProduct(productData) {
//     const totalPrice = productData.name * productData.price;
//     return totalPrice;
// }

// handleProduct(productData, logProduct);
// console.log(handleProduct(productData, logProduct));

const transactionLimit = 1000;
const account = {
    firstName: 'Andrii',
    lastName: 'Shevchuk',
    balance: 618,
    withdrow(amount, onSuccess, onError) { 
        if (amount > transactionLimit) {
            onError(`Сума зняття є більшою за ліміт транзакції - залишок ${this.balance}!`) 
        }
        else if (amount > this.balance) {
            onError(`Сума зняття є більшою ніж є на балансі - залишок ${this.balance}!`)
        }
        else {
            this.balance -= amount;
            onSuccess(`Оперція зняття відбулась успішно - залишок ${this.balance}!`)
        }
    },
    deposit(amount, onSuccess, onError) {
        if (amount > transactionLimit) {
            onError(`Сума поповнення є більшою за ліміт транзакції - залишок ${this.balance}!`)
        }
        else if (amount <= 0) {
            onError(`Сума поповнення не може бути < або = 0 - залишок ${this.balance}!`)
        }
        else {
            this.balance += amount;
            onSuccess(`Поповнення відбулось успішно - залишок ${this.balance}`)
        }
     },

};

function handleSuccess(message) {
    console.log(`Success! ${message}`);
    
}
function handleError(message) {
    console.log(`Error! ${message}`);

}

account.withdrow(400, handleSuccess, handleError);
// account.withdrow(400, handleSuccess, handleError);
// account.withdrow(4000, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.withdrow(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(660, handleSuccess, handleError);



/*-------------Функція вищого порядку-----------------*/

function each(array, callback) { 
    const resultArray = [];
    for (let number of array) {
        const newValue = callback(number);
        resultArray.push(newValue);
    }
    return resultArray;
};

/*---------------Інлайнові функції - колбеки ----------------*/
console.log(
    each([25, 12, 98, 456, 1], function (value) {
        return value * 2;
    })
);

/*------------Анонімна функція--------------------*/
console.log(
    each([13, 65, 78, 63, 45], function (value) {
        return value - 2;
    })
);

console.log(
    each([49, 25, 81, 144, 100], function (value) {
        return Math.sqrt(value);
    })
);

