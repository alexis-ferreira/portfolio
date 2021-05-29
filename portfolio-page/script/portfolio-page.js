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

let siteArray = document.getElementsByClassName('descriptionPage');
// console.log(siteArray);




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

    for (let i = 0; i <siteArray.length; i++){
        siteArray[i].style.height = heightScreen + 'px';
    }
});



// DEFILEMENT INTO DESCRIPTION PAGE

arrowDown.addEventListener('click', function(){
    siteArray[0].scrollIntoView({behavior: "smooth"})
})