const bar = document.querySelector(".bar");
const navMenu = document.querySelector(".nav-menu");
const close = document.querySelector('.close')

bar.addEventListener("click", revealMobileNav);

function revealMobileNav(){
    navMenu.classList.add('reveal');
    close.classList.add('display')
    bar.classList.add('hide')
}

close.addEventListener('click', hideMobileNav)

function hideMobileNav(){
    navMenu.classList.remove('reveal')
    close.classList.remove('display')
    bar.classList.remove('hide')
}