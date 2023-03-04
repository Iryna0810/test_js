const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', handleOpenModal);

function handleOpenModal() {
    document.body.classList.add('show-modal');
}

refs.closeModalBtn.addEventListener('click', handleCloseModal);
function handleCloseModal() {
    document.body.classList.remove('show-modal')
};