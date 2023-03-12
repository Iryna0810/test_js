console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);

const user = {
    firstName: "Iryna",
    age: 40
};

localStorage.setItem('user', JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem('user')));
console.log(localStorage.length);

localStorage.setItem('luckyNumber', JSON.stringify('500'));

// localStorage.removeItem('user');

// localStorage.clear();


console.log(JSON.parse(localStorage.getItem('user')));
