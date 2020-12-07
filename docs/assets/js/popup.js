'use strict';

const btnAuth = document.querySelector('.auth'),
    authClose = document.querySelector('.popup-fixed .close');

const popupAuthOpen = () => {
    const popupAuth = document.querySelector('.popup-fixed');

    if (popupAuth.classList.contains('hide')) {
        popupAuth.classList.replace('hide', 'active');
    } else {
        popupAuth.classList.replace('active', 'hide')
    }
}

btnAuth.addEventListener('click', popupAuthOpen);
authClose.addEventListener('click', popupAuthOpen);
