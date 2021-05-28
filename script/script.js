'use strict';

// ---------- MENU -----------


// VARIABLE

let divMenu = document.getElementById('container-menu');
// console.log(divMenu);

let btnMenu = document.getElementById('btn-menu');
// console.log(btnMenu);

let iconMenu = document.getElementsByClassName('fa-compass');
// console.log(iconMenu[0]);

let btnPortfolio = document.getElementById('portfolio');
// console.log(btnPortfolio);

let btnCv = document.getElementById('cv');
// console.log(btnCv);

let btnContact = document.getElementById('contact');
// console.log(btnContact);

let borderPortfolio = document.getElementById('borderPortfolio');
// console.log(borderPortfolio);

let borderCv = document.getElementById('borderCv');
// console.log(borderCv);

let borderContact = document.getElementById('borderContact');
// console.log(borderContact);

// SCRIPT

btnMenu.addEventListener('mouseenter', function(){
    btnPortfolio.style.top = '0';
    borderPortfolio.style.opacity = '100%';
    borderPortfolio.style.transition = 'opacity 1500ms'

    btnCv.style.left = '0';
    btnCv.style.transform = 'rotate(-360deg)'
    borderCv.style.opacity = '100%';
    borderCv.style.transition = 'opacity 1500ms'
    borderCv.style.transitionDelay = "300ms"

    btnContact.style.right = '0';
    btnContact.style.transform = 'rotate(360deg)';
    borderContact.style.opacity = '100%';
    borderContact.style.transition = 'opacity 1500ms'
    borderContact.style.transitionDelay = "300ms"

    iconMenu[0].style.fontSize = '50px';
    iconMenu[0].style.border = '1px solid black';
    iconMenu[0].style.transition = 'font-size 500ms, border 1000ms, transform 500ms';
    iconMenu[0].style.transitionDelay = '300ms';
    
});

divMenu.addEventListener('mouseleave', function(){
    btnPortfolio.style.top = '154px';
    borderPortfolio.style.opacity = '0%';
    borderPortfolio.style.transition = 'opacity 300ms'

    btnCv.style.left = '154px';
    btnCv.style.transform = 'rotate(360deg)';
    borderCv.style.opacity = '0%';
    borderCv.style.transition = 'opacity 500ms'

    btnContact.style.right = '154px';
    btnContact.style.transform = 'rotate(-360deg)';
    borderContact.style.opacity = '0%';
    borderContact.style.transition = 'opacity 500ms'

    iconMenu[0].style.fontSize = '80px';
    iconMenu[0].style.border = '1px solid white';
    iconMenu[0].style.transition = 'font-size 500ms, border 1000ms';
    iconMenu[0].style.transitionDelay = '300ms';
});

btnPortfolio.addEventListener('mouseenter', function(){
    iconMenu[0].style.transform = 'rotate(-45deg)';
    iconMenu[0].style.transition = 'transform 500ms';
})

btnPortfolio.addEventListener('mouseleave', function(){
    iconMenu[0].style.transform = 'rotate(0deg)'
})

btnCv.addEventListener('mouseenter', function(){
    iconMenu[0].style.transform = 'rotate(-135deg)';
    iconMenu[0].style.transition = 'transform 500ms';
})

btnCv.addEventListener('mouseleave', function(){
    iconMenu[0].style.transform = 'rotate(0deg)'
})

btnContact.addEventListener('mouseenter', function(){
    iconMenu[0].style.transform = 'rotate(45deg)';
    iconMenu[0].style.transition = 'transform 500ms';
})

btnContact.addEventListener('mouseleave', function(){
    iconMenu[0].style.transform = 'rotate(0deg)'
})