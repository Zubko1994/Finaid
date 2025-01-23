const burger = document.querySelector('.burger__menu')
const menu = document.querySelector('.header__nav')
burger.addEventListener('click',() => {
    document.body.style.overflow = "hidden"
    if(burger.classList.contains("burger-active")) document.body.style.overflow = "auto"
    burger.classList.toggle('burger-active')
    menu.classList.toggle('header__nav-active')
})

