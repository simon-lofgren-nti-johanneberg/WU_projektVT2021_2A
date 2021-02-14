const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')

function toggleMeny() { 
    menu.classList.toggle('menu_connected')
    hamburger.classList.toggle('cross')
}

hamburger.addEventListener('click', toggleMeny)