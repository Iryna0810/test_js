/*----------------------Стрілочні функції--------------------*/
/*---------------Function Declaration------------------*/
/*Function Declaration можна використовувати в будь-якому місці коду*/
function getSum1(firstName, secondName) {
    return firstName + secondName;
};
console.log(getSum1(500, 456842));

/*---------------Function Expration-----------------------*/
/*можна використовувати, визивати тільки після ініціалізації (об'явлення) функції у код,
не використовують в методах об'єктів та класів*/

const getSum2 = function (firstName, secondName) {
    return firstName * secondName;
};
console.log(getSum2(5, 456));

const getSum3 = (firstName, secondName) => {
    return firstName * secondName;
};

console.log(getSum3(30, 842));

const sayHi = (newname, age) => {
    console.log(newname, age );
};
sayHi('Danylo', 10);

/*--------------НЕ явне поверення-----------------------*/
const getSum4 = (firstName, secondName) =>
    firstName - secondName;

console.log(getSum4(5598, 256));

const handleProduct = (productData, callback) => {
    callback(productData);
}
const logProduct = (product) => {
    console.log(product);
}

const logTotalPrice =({ price, quantity })=> {
    console.log(price * quantity);
}
handleProduct(
    {
        nameProduct: 'apple',
        price: 200,
        quantity: 23,
    },
    logProduct
);
handleProduct(
    {
        nameProduct: 'apple',
        price: 200,
        quantity: 23,
    },
    logTotalPrice
);

// function each(array, callback) {
//     const newArray = [];

//     for (const el of array) {
//         newArray.push(callback(el));
//     }
//     return newArray;
// }

const each = (array, callback) => {
    const newArray = [];

    for (const el of array) {
        newArray.push(callback(el));
    }
    return newArray;
}

// console.log(
//     each([56, 23, 41, 76,], function (value) {
//         return value * 2;
//     })
// )

console.log(
    each([56, 23, 41, 76,], (value) => value * 2)
);

// console.log(
//     each([56, 23, 41, 76,], function (value) {
//         return value - 10;
//     })
// )

console.log(
    each([56, 23, 41, 76,], (value) => value - 10)
);

console.log(
    each([56, 23, 41, 76,], (value) => {
        return Math.sqrt(value) - 1
    })
);
console.log(
    each([1.56, 2.3, 0.841, 7.6,], (value) => {
        return Math.ceil(value)
    })
);
const callback1 = (value) => Math.floor(value);
console.log(
    each([1.56, 2.3, 0.841, 7.6,], callback1,)
);

