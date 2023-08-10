'use strict';
window.addEventListener('DOMContentLoaded', ()=>{
    const NavbarItem = document.querySelectorAll('.nav-list-item');
    NavbarItem.forEach(item =>{
        item.addEventListener('click', ()=> {
            document.querySelector('.nav').querySelector('.active').classList.remove('active')
            item.classList.add('active')
        })
    })
})