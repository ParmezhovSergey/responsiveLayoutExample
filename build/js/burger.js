'use strict';

// let burger = document.getElementById('burger');
// let navBtns = document.querySelectorAll('.mobile-nav__link');

// function activateBurger() {
//    let burgerIcon = document.querySelector('.header__burger');
//    let mobileNav = document.querySelector('.mobile-nav');
//    let body = document.body;


//    burgerIcon.classList.toggle('burger_active');
//    mobileNav.classList.toggle('burger_active');
//    body.classList.toggle('locked');
// }


// for (let button of navBtns) {
//    button.addEventListener('click', activateBurger)
// }

// burger.addEventListener('click', activateBurger);


let burger = document.getElementById('burger');
let headerBurger = document.querySelectorAll('header__burger');

function activateBurger() {
   let headerBurger = document.querySelector('.header__burger');
   let headerMenu = document.querySelector('.header__menu');
   let headerIcons = document.querySelector('.header__icons');
   let headerProject = document.querySelector('.header__project');
   let headerShop = document.querySelector('.header__shop');
   let headerContacts = document.querySelector('.header__contacts');
   let headerFacebook = document.querySelector('.header__facebook');
   let headerInstagram = document.querySelector('.header__instagram');
   let headerVk = document.querySelector('.header__vk');
   let body = document.body;

   headerBurger.classList.toggle('burger__active');
   headerMenu.classList.toggle('burger__active');
   headerIcons.classList.toggle('burger__active');
   headerProject.classList.toggle('burger__active');
   headerShop.classList.toggle('burger__active');
   headerContacts.classList.toggle('burger__active');
   headerFacebook.classList.toggle('burger__active');
   headerInstagram.classList.toggle('burger__active');
   headerVk.classList.toggle('burger__active');
   body.classList.toggle('locked');
}


for (let button of headerBurger ) {
   button.addEventListener('click', activateBurger)
}

burger.addEventListener('click', activateBurger);

