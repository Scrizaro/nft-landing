const burgerTrigger = document.querySelector('.header__burger')
const burgerClose = document.querySelector('.header__burger--close')
const burgerItem = document.querySelector('.header_inner')
const body = document.querySelector('body')
const headerLink = document.querySelectorAll('.header_link')

burgerTrigger.addEventListener('click', (e) => {
    toggleBurger()
});
burgerClose.addEventListener('click', (e) => {
    toggleBurger()
})

headerLink.forEach(item => {
    item.addEventListener('click', (e) => {
        toggleBurger()
    })
})
function toggleBurger(){
    burgerItem.classList.toggle('active');
    body.classList.toggle('active');
    burgerClose.classList.toggle('active');
    burgerTrigger.classList.toggle('active');
}
