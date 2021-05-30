'use strict';

// VARIABLES

let titlePortfolio = document.getElementById('title');
// console.log(titlePortfolio);

let description = document.getElementById('description');
// console.log(description);

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

window.addEventListener('load', function(){
    sectionHeader.scrollIntoView()
})

document.addEventListener('DOMContentLoaded', function(){
    titlePortfolio.style.opacity = '1';
    titlePortfolio.style.marginLeft = '100px';
    titlePortfolio.style.transitionDelay = '500ms';

    description.style.opacity = '1'
    description.style.transitionDelay = '500ms'
    
    if (widthScreen <= 450){
    description.style.margin = '150px auto 0 auto'
    } else{
    description.style.marginRight = '100px'
    }

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




// LOOP STUDIO ANIMATION

let titleLoopStudio = document.getElementById('titleSite1');
// console.log(titleLoopStudio);

let bgTitleLoopStudio = document.getElementById('bgTitleH2');
// console.log(bgTitleLoopStudio);

let site1Page = document.getElementsByClassName('site-1');
site1Page = site1Page[0];
// console.log(site1Page);

let imgSite1 = document.getElementsByClassName('img-site');
imgSite1 = imgSite1[0];
// console.log(imgSite1);

let imgSite1Responsive = document.getElementsByClassName('img-site-responsive');
imgSite1Responsive = imgSite1Responsive[0];
// console.log(imgSite1Responsive);

let arrowUp = document.getElementById('arrowUp');
// console.log(arrowUp);

let githubSite1 = document.getElementById('lienGithubSite1');
// console.log(githubSite1);

let bgGithubSite1 = document.getElementsByClassName('fa-github-square');
bgGithubSite1 = bgGithubSite1[0];
// console.log(bgGithubSite1);


arrowDown.addEventListener('click', function(){
    
    titleLoopStudio.style.left = '50px';
    titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
    titleLoopStudio.style.transitionDelay = '1000ms';
    titleLoopStudio.style.opacity = '1';

    bgTitleLoopStudio.style.width = '250px';
    bgTitleLoopStudio.style.transition = 'width 1000ms';
    bgTitleLoopStudio.style.transitionDelay = '800ms';

    site1Page.style.backgroundColor = '#342670';
    site1Page.style.transition = 'background-color 1s'

    imgSite1.style.height = '500px';
    imgSite1.style.transition = 'height 1000ms, opacity 2s';
    imgSite1.style.transitionDelay = '1000ms';
    imgSite1.style.opacity = '1'

    imgSite1Responsive.style.height = '570px';
    imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
    imgSite1Responsive.style.transitionDelay = '1000ms';
    imgSite1Responsive.style.opacity = '1';

    arrowUp.style.opacity = '1';
    arrowUp.style.transition = 'opacity 1s';
    arrowUp.style.transitionDelay = '1000ms';

    githubSite1.style.right = '50px';
    githubSite1.style.transition = 'right 1s, opacity 10ms';
    githubSite1.style.transitionDelay = '2000ms';
    githubSite1.style.opacity = '1';
})

arrowUp.addEventListener('click', function(){
    setTimeout(function(){
        sectionHeader.scrollIntoView({behavior: "smooth"});
    }, 1100)

    titleLoopStudio.style.left = '0';
    titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
    titleLoopStudio.style.opacity = '0';

    bgTitleLoopStudio.style.width = '0';
    bgTitleLoopStudio.style.transition = 'width 1000ms';
    bgTitleLoopStudio.style.transitionDelay = '300ms';

    site1Page.style.backgroundColor = 'black';
    site1Page.style.transition = 'background-color 200ms'
    site1Page.style.transitionDelay = '1000ms'

    imgSite1.style.height = '0';
    imgSite1.style.transition = 'height 1000ms, opacity 2s';
    imgSite1.style.opacity = '0'

    imgSite1Responsive.style.height = '0';
    imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
    imgSite1Responsive.style.opacity = '0';

    arrowUp.style.opacity = '0';
    arrowUp.style.transition = 'opacity 1s';
    arrowUp.style.transitionDelay = '1000ms';

    githubSite1.style.right = '-80px';
    githubSite1.style.opacity = '0';
    githubSite1.style.transition = 'right 1s, opacity 1000ms';
});

githubSite1.addEventListener('mouseenter', function(){
    bgGithubSite1.style.backgroundColor = '#D548EB';
    bgGithubSite1.style.transition = 'background-color 300ms';
})

githubSite1.addEventListener('mouseleave', function(){
    bgGithubSite1.style.backgroundColor = 'white';
    bgGithubSite1.style.transition = 'background-color 300ms';
})

