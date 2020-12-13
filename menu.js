const openBtn = document.getElementById('open-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const nav = document.querySelector('nav');
const links = document.querySelectorAll(".menu li");
var isOpen = false;

function openMenu(){
    if(!isOpen){
        nav.classList.add('menu-opened');
        nav.classList.remove('menu-closed');
        isOpen = true;
    }
}

function closeMenu(){
    if(isOpen){
        nav.classList.remove('menu-opened');
        nav.classList.add('menu-closed');
        isOpen = false;
    }
}


openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
links.forEach(link => {
    link.addEventListener("click", ()=>setTimeout(closeMenu, 100));
});
