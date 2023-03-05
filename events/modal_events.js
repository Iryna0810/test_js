const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', handleOpenModal);
refs.closeModalBtn.addEventListener('click', handleCloseModal);
refs.backdrop.addEventListener('click', handleBackdropClick);


function handleOpenModal() {
window.addEventListener('keydown', handleEscKeyPress);
    document.body.classList.add('show-modal');
}



function handleCloseModal() {
    window.removeEventListener('keydown', handleEscKeyPress);
    document.body.classList.remove('show-modal')
};

function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
        handleCloseModal();
    }
};



function handleEscKeyPress(event) {
    // if (event.code === 'Escape') {
    // handleCloseModal();    
    // }  
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        handleCloseModal();
    }
}



