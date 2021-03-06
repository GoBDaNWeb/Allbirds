const favorites = document.querySelectorAll('.favor')
const burgerBtn = document.querySelector('.btn-burger')
const burger = document.querySelector('.burger')
const phoneMenu = document.querySelector('.phone-menu')
const overlay = document.querySelector('.body-overlay')
const shoes = document.querySelector("#shoes")
const apparel = document.querySelector("#apparel")
const basics = document.querySelector("#basics")

favorites.forEach( (item, i) => {
    item.onclick = () => {
        if(i === 0) {
            item.classList.add('active')
            favorites[2].classList.remove('active')
            favorites[1].classList.remove('active')
            shoes.classList.add('active')
            apparel.classList.remove('active')
            basics.classList.remove('active')
        }
        if(i === 1) {
            item.classList.add('active')
            favorites[2].classList.remove('active')
            favorites[0].classList.remove('active')
            shoes.classList.remove('active')
            apparel.classList.add('active')
            basics.classList.remove('active')
        }
        if(i === 2) {
            item.classList.add('active')
            favorites[0].classList.remove('active')
            favorites[1].classList.remove('active')
            shoes.classList.remove('active')
            apparel.classList.remove('active')
            basics.classList.add('active')
        }
    }
})

burgerBtn.onclick = () => {
    burger.classList.toggle('burger-active')
    phoneMenu.classList.toggle('active')
    overlay.classList.toggle('active')
}

overlay.onclick = () => {
    burger.classList.remove('burger-active')
    phoneMenu.classList.remove('active')
    overlay.classList.remove('active')
}