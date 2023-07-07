let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    //Makes sure three line and search bar can't be opened at the same time when you open search bar
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar')

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    //Makes sure three line and search bar can't be opened at the same time when you open search bar when you open three lines
    search.classList.remove('active');
}

//Hide Menu And Search Box On
window.onscroll = () => {
    menu.classList.remove('active')
    search.classList.remove('active');
}

//Header
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow',window.scrollY> 0);
});