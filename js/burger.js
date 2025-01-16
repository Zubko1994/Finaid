const burger = document.querySelector('.burger__menu')
const menu = document.querySelector('.header__nav')
burger.addEventListener('click',() => {
    burger.classList.toggle('burger-active')
    menu.classList.toggle('header__nav-active')
})

