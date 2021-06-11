const favorites = document.querySelectorAll('.favor')
const burger = document.querySelector('.burger')
const phoneMenu = document.querySelector('.phone-menu')
const overlay = document.querySelector('.body-overlay')

favorites.forEach( (item, i) => {
    item.onclick = () => {
        if(i === 0) {
            item.classList.add('active')
            favorites[2].classList.remove('active')
            favorites[1].classList.remove('active')
        }
        if(i === 1) {
            item.classList.add('active')
            favorites[2].classList.remove('active')
            favorites[0].classList.remove('active')
        }
        if(i === 2) {
            item.classList.add('active')
            favorites[0].classList.remove('active')
            favorites[1].classList.remove('active')
        }
    }
})

burger.onclick = () => {
    burger.classList.toggle('burger-active')
    phoneMenu.classList.toggle('active')
    overlay.classList.toggle('active')
}