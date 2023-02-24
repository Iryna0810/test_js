const heroTitleEl = document.querySelector(".title");
console.log(heroTitleEl);
const imageEl = document.querySelector(".img_kitty");
console.log(imageEl.src);

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(`.site-nav__link[href='${currentPageUrl}']`);
console.log(linkEl);
linkEl.classList.add(`site-nav__link--current`);



const navEl2 = document.querySelector(`.qwerty`);
console.log(navEl2);
const navEl = document.querySelector(`.site-nav__item`);
console.log(navEl.classList);
navEl.classList.add(`super-cool`);
navEl2.classList.remove(`qwerty`);
navEl.classList.replace(`super-cool`, `qwerty`);
console.log(navEl.classList.contains(`qwerty`));

const navEl3 = document.querySelector(`.site-nav`);
console.log(navEl3);

// const firstNavItemEl = navEl3.querySelector('.site-nav__item');

const firstNavItemEl = navEl3.firstElementChild;
console.log(firstNavItemEl);

const divEl = document.createElement('div');
divEl.classList.add('js-color__options');
navEl3.append(divEl);


const colorPickerOptions = [
    { label: 'red', color: '#f44366' },
    { label: 'green', color: '#4caf50' },
    { label: 'blue', color: '#2196f3' },
    { label: 'pink', color: '#e91e63' },
];

const colorPickerContainerEl = document.querySelector(`.js-color__options`);

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('colorPickerOption');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     buttonEl.style.width = '150px';

//     return buttonEl;
// });

// console.log(elements);
// colorPickerContainerEl.append(...elements);

const makeColorPictureOptions = (options) => {
    return options.map(
        option => {
            const buttonEl = document.createElement('button');
            buttonEl.type = 'button';
            buttonEl.classList.add('colorPickerOption');
            buttonEl.textContent = option.label;
            buttonEl.style.backgroundColor = option.color;
            buttonEl.style.width = '150px';

            return buttonEl;
        }
    )
};
const elements = makeColorPictureOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);
console.log(elements);

const product = {
    name: 'tulips',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolor accusantium consequuntur error dolorem a quod, veritatis aliquam odit eaque est aperiam possimus unde mollitia et earum eum tempore, eos aliquid corrupti impedit sunt aspernatur sapiente debitis. Cumque molestiae, repellendus inventore nihil ipsum error impedit. Reiciendis facilis unde quidem laborum.',
    price: 50,
    onSale: true,
    available: true,
    
}

const productEl = document.createElement('article');
productEl.classList.add('product');

const titleEl = document.createElement('h2');
titleEl.textContent = product.name;
titleEl.classList.add('product__name');

const descrEl = document.createElement('p');
descrEl.textContent = product.description;
descrEl.classList.add('product__descr');

const priceEl = document.createElement('p');
priceEl.textContent = `Ціна за товар: ${product.price}`;
priceEl.classList.add('product__price');


console.log(descrEl);

productEl.append(titleEl, descrEl, priceEl);

console.log(productEl);


// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup1 = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup1);

// Adding all the markup in one operation
list.innerHTML = markup1;



const list1 = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");





