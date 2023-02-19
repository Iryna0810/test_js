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







