export const popUpOpen = () => {
    const popUpBtn = document.querySelector('.main__info__pop-up-button');
    const popUpBackground = document.querySelector('.main__info__pop-up-background');
    
    popUpBtn.addEventListener('click', () => {
        popUpBackground.classList.add('main__info__pop-up-background-active')
    })
}

