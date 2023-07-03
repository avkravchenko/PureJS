export const countItems = () => {
    const number = document.querySelector('.main__info__items-amount__number');
    const increase = document.querySelector('.main__info__items-amount__increase');
    const decrease = document.querySelector('.main__info__items-amount__decrease');
    const sticker = document.querySelector('.header__nav__list__item__bag__count');

    let currentValue = +number.innerHTML;
    
    increase.addEventListener('click', () => {
        number.innerText = ++currentValue;
        sticker.innerHTML = currentValue;
    })

    decrease.addEventListener('click', () => {
        if (currentValue !== 0) {
            number.innerText = --currentValue;
            sticker.innerHTML = currentValue;
        } 

        if (currentValue === 0) {
            sticker.innerHTML = '';
        }
    })
}