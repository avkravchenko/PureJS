export const burger = () => {
    const openBurger = document.querySelector('.burger-open');
    const closeBurger = document.querySelector('.burger-close');
    const burgerBack = document.querySelector('.burger-background');
    const burgerMenu = document.querySelector('.burger-menu');

    openBurger.addEventListener('click', () => {
        burgerBack.classList.add('burger-background-active');
        burgerMenu.classList.add('burger-menu-active');
    })

    closeBurger.addEventListener('click', () => {
        burgerBack.classList.remove('burger-background-active');
        burgerMenu.classList.remove('burger-menu-active');
    })
}