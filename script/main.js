"use strict";

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

let paragraphPortfolio = document.getElementById('p-portfolio');

let paragraphCv = document.getElementById('p-cv');

let paragraphContact = document.getElementById('p-contact');

let titlePage = document.getElementById('title');
// console.log(titlePage);

let paragraphDev = document.getElementById('p-dev');
// console.log(paragraphDev);

let windowWidth = window.innerWidth;
// console.log(screenWidth);

let windowHeight = window.innerHeight;
// console.log(screenHeight);

let divWindow = document.getElementsByClassName('container-screen');
divWindow = divWindow[0];
// console.log(divWindow);

let alexisPicture = document.getElementById('containerImg');
// console.log(alexisPicture);






// SCRIPT

document.addEventListener('DOMContentLoaded', function(){
    titlePage.style.opacity = "1";

    paragraphDev.style.opacity = '1';

    divMenu.style.opacity = '1';

    divWindow.style.height = windowHeight + 'px';

    if (screen.width > 450){
        setInterval(() => {
            alexisPicture.style.left = '-250px';
            alexisPicture.style.opacity = '1';
            alexisPicture.style.transition = 'left 1s, opacity 1s';
            alexisPicture.style.transitionDelay = '1000ms';
        }, 2000);
    } else {
        alexisPicture.style.right = '-35px';
        alexisPicture.style.opacity = '1';
        alexisPicture.style.transition = 'right 1500ms, opacity 1s';
        alexisPicture.style.transitionDelay = '1000ms';
    }
});

btnMenu.addEventListener('mouseenter', function(){
    btnPortfolio.style.top = '0';
    borderPortfolio.style.opacity = '100%';
    borderPortfolio.style.transition = 'opacity 1500ms';

    btnCv.style.left = '0';
    btnCv.style.transform = 'rotate(-360deg)';
    borderCv.style.opacity = '100%';
    borderCv.style.transition = 'opacity 1500ms';
    borderCv.style.transitionDelay = "300ms";

    btnContact.style.right = '0';
    btnContact.style.transform = 'rotate(360deg)';
    borderContact.style.opacity = '100%';
    borderContact.style.transition = 'opacity 1500ms';
    borderContact.style.transitionDelay = "300ms";

    iconMenu[0].style.fontSize = '50px';
    iconMenu[0].style.border = '1px solid black';
    iconMenu[0].style.transition = 'font-size 500ms, border 1000ms, transform 500ms';
    iconMenu[0].style.transitionDelay = '300ms';
    
});

divMenu.addEventListener('mouseleave', function(){
    btnPortfolio.style.top = '154px';
    borderPortfolio.style.opacity = '0%';
    borderPortfolio.style.transition = 'opacity 300ms';

    btnCv.style.left = '154px';
    btnCv.style.transform = 'rotate(360deg)';
    borderCv.style.opacity = '0%';
    borderCv.style.transition = 'opacity 500ms';

    btnContact.style.right = '154px';
    btnContact.style.transform = 'rotate(-360deg)';
    borderContact.style.opacity = '0%';
    borderContact.style.transition = 'opacity 500ms';

    iconMenu[0].style.fontSize = '80px';
    iconMenu[0].style.border = '1px solid white';
    iconMenu[0].style.transition = 'font-size 500ms, border 1000ms';
    iconMenu[0].style.transitionDelay = '300ms';
});

btnPortfolio.addEventListener('mouseenter', function(){
    iconMenu[0].style.transform = 'rotate(-45deg)';
    iconMenu[0].style.transition = 'transform 500ms';

    paragraphPortfolio.style.backgroundColor = 'black';
    paragraphPortfolio.style.color = 'white';
    paragraphPortfolio.style.transition = 'background-color 300ms, color 300ms';
});

btnPortfolio.addEventListener('mouseleave', function(){
    iconMenu[0].style.transform = 'rotate(0deg)';

    paragraphPortfolio.style.backgroundColor = 'white';
    paragraphPortfolio.style.color = 'black';
    paragraphPortfolio.style.transition = 'background-color 300ms, color 300ms';
});

btnCv.addEventListener('mouseenter', function(){
    iconMenu[0].style.transform = 'rotate(-135deg)';
    iconMenu[0].style.transition = 'transform 500ms';

    paragraphCv.style.backgroundColor = 'black';
    paragraphCv.style.color = 'white';
    paragraphCv.style.transition = 'background-color 300ms, color 300ms';
});

btnCv.addEventListener('mouseleave', function(){
    iconMenu[0].style.transform = 'rotate(0deg)';

    paragraphCv.style.backgroundColor = 'white';
    paragraphCv.style.color = 'black';
    paragraphCv.style.transition = 'background-color 300ms, color 300ms';
});

btnContact.addEventListener('mouseenter', function(){
    iconMenu[0].style.transform = 'rotate(45deg)';
    iconMenu[0].style.transition = 'transform 500ms';

    paragraphContact.style.backgroundColor = 'black';
    paragraphContact.style.color = 'white';
    paragraphContact.style.transition = 'background-color 300ms, color 300ms';
});

btnContact.addEventListener('mouseleave', function(){
    iconMenu[0].style.transform = 'rotate(0deg)';

    paragraphContact.style.backgroundColor = 'white';
    paragraphContact.style.color = 'black';
    paragraphContact.style.transition = 'background-color 300ms, color 300ms';
});



// RESPONSIVE

if (windowWidth <= 450){

    let menuOpen = false;
    console.log(menuOpen);

    btnMenu.addEventListener('click', function(){

        if (menuOpen == false){
                menuOpen = true;

                btnPortfolio.style.top = '0';
                borderPortfolio.style.opacity = '100%';
                borderPortfolio.style.transition = 'opacity 1500ms';
            
                btnCv.style.left = '20px';
                btnCv.style.transform = 'rotate(-360deg)';
                borderCv.style.opacity = '100%';
                borderCv.style.transition = 'opacity 1500ms';
                borderCv.style.transitionDelay = "300ms";
            
                btnContact.style.right = '20px';
                btnContact.style.transform = 'rotate(360deg)';
                borderContact.style.opacity = '100%';
                borderContact.style.transition = 'opacity 1500ms';
                borderContact.style.transitionDelay = "300ms";
            
                iconMenu[0].style.fontSize = '50px';
                iconMenu[0].style.border = '1px solid black';
                iconMenu[0].style.transition = 'font-size 500ms, border 1000ms, transform 500ms';
                iconMenu[0].style.transitionDelay = '300ms';

            }else {
                menuOpen = false;

                btnPortfolio.style.top = '154px';
                borderPortfolio.style.opacity = '0%';
                borderPortfolio.style.transition = 'opacity 300ms';

                btnCv.style.left = '154px';
                btnCv.style.transform = 'rotate(360deg)';
                borderCv.style.opacity = '0%';
                borderCv.style.transition = 'opacity 500ms';

                btnContact.style.right = '154px';
                btnContact.style.transform = 'rotate(-360deg)';
                borderContact.style.opacity = '0%';
                borderContact.style.transition = 'opacity 500ms';

                iconMenu[0].style.fontSize = '80px';
                iconMenu[0].style.border = '1px solid white';
                iconMenu[0].style.transition = 'font-size 500ms, border 1000ms';
                iconMenu[0].style.transitionDelay = '300ms';
            }
        });
}


// REDIRECTION

let linkPortefolio = document.getElementById('linkPortfolio');
// console.log(linkPortfolio);

linkPortefolio.addEventListener('click', redirection);

function redirection(){
    setTimeout(function(){
        window.location.href = "./portfolio.html";
    }, 1100);

    btnPortfolio.style.top = '154px';
    borderPortfolio.style.opacity = '0%';
    borderPortfolio.style.transition = 'opacity 300ms';

    btnCv.style.left = '154px';
    btnCv.style.transform = 'rotate(360deg)';
    borderCv.style.opacity = '0%';
    borderCv.style.transition = 'opacity 500ms';

    btnContact.style.right = '154px';
    btnContact.style.transform = 'rotate(-360deg)';
    borderContact.style.opacity = '0%';
    borderContact.style.transition = 'opacity 500ms';

    iconMenu[0].style.fontSize = '80px';
    iconMenu[0].style.border = '1px solid white';
    iconMenu[0].style.transition = 'font-size 500ms, border 1000ms';
    iconMenu[0].style.transitionDelay = '300ms';

    titlePage.style.opacity = "0";
    titlePage.style.transition = "opacity 1000ms";

    paragraphDev.style.opacity = '0';
    paragraphDev.style.transition = "opacity 1000ms";
    
    divMenu.style.opacity = '0';
    divMenu.style.transition = "opacity 1000ms";

    if (screen.width > 450 ){
        alexisPicture.style.left = '-300px';
        alexisPicture.style.opacity = '0';
        alexisPicture.style.transition = 'left 1s, opacity 800ms';
    } else {
        alexisPicture.style.right = '-250px';
        alexisPicture.style.opacity = '0';
        alexisPicture.style.transition = 'right 1500ms, opacity 1s';
    }
}