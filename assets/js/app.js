const active = () => {
    const body = document.querySelector('body')
    const burger = document.querySelector('.burger')
    const overlay = document.querySelector('.navigation-wrapper .overlay')

    if(burger) {
        burger.addEventListener('click', () => {
            body.classList.toggle('navigation-open')
        })
    }

    if(overlay) {
        overlay.addEventListener('click', () => {
            body.classList.remove('navigation-open')
        })
    }
}

active()
AOS.init();



