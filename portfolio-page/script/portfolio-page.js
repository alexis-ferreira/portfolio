'use strict';

// VARIABLES

let titlePortfolio = document.getElementById('title');
// console.log(titlePortfolio);

let widthScreen = (window.innerWidth);
// console.log(widthScreen);

let heightScreen = (window.innerHeight)
// console.log(heightScreen);

let sectionHeader = document.getElementById('header');
// console.log(sectionHeader);

let arrowLeft = document.getElementsByClassName('fa-arrow-left');
arrowLeft = arrowLeft[0];
// console.log(arrowLeft);

let arrowDown = document.getElementsByClassName('fa-chevron-down');
arrowDown = arrowDown[0];
// console.log(arrowDown);




// SCRIPT 

document.addEventListener('DOMContentLoaded', function(){
    titlePortfolio.style.opacity = '1';
    titlePortfolio.style.marginLeft = '100px';
    titlePortfolio.style.transitionDelay = '500ms';

    sectionHeader.style.height = heightScreen + 'px';

    arrowLeft.style.opacity = '1';
    arrowLeft.style.transitionDelay = '500ms';

    arrowDown.style.opacity = "1"
    arrowDown.style.transitionDelay = '500ms';
});