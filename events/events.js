const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
}

window.addEventListener ('keydown', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);


function onKeypress (event) { 
    console.log(event);
   
    console.log(`event.code: `, event.code); 
    console.log(`event.key`, event.key);

    refs.output.textContent += event.key;
    
};

function onClearOutput() {
    refs.output.textContent = '';
}

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener(`mouseenter`, handleMouseEnter);
boxRef.addEventListener(`mouseleave`, handleMouseLeave);

function handleMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box-active')
}

function handleMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box-active');

}

boxRef.addEventListener(`mouseover`, handleMouseEnter);
boxRef.addEventListener('mouseout', handleMouseLeave);
boxRef.addEventListener('mousemove', handleMouseMove);



function handleMouseMove(event) {
    console.log(event);
};



