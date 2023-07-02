export const popUpClose = () => {
    const popUpClose = document.querySelector('.main__info__pop-up__close');
    const popUpBackground = document.querySelector('.main__info__pop-up-background');
    
    popUpClose.addEventListener('click', () => {
        popUpBackground.classList.remove('main__info__pop-up-background-active')
    })
}
