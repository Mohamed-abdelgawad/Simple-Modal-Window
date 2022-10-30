'use strict';
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}
const closeModel = function () {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModal.length; i++)
btnsShowModal[i].addEventListener(('click'), openModal);

btnCloseModal.addEventListener('click', closeModel);
overLay.addEventListener('click', closeModel);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModel();
    }
})