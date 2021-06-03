'use strict';

// VARIABLES

let titlePortfolio = document.getElementById('title');
// console.log(titlePortfolio);

let description = document.getElementById('description');
// console.log(description);

let widthScreen = (window.innerWidth);
// console.log(widthScreen);

let heightScreen = (window.innerHeight);
// console.log(heightScreen);

let sectionHeader = document.getElementById('header');
// console.log(sectionHeader);

let arrowLeft = document.getElementsByClassName('fa-arrow-left');
arrowLeft = arrowLeft[0];
// console.log(arrowLeft);

let arrowDown = document.getElementsByClassName('fa-chevron-down');
// console.log(arrowDown);

let btnArrowDown = document.getElementById('scrollDown');
// console.log(btnArrowDown);

let siteArray = document.getElementsByClassName('descriptionPage');
// console.log(siteArray);








// SCRIPT



document.addEventListener('DOMContentLoaded', function(){
    titlePortfolio.style.opacity = '1';
    titlePortfolio.style.marginLeft = '-300px';
    titlePortfolio.style.transitionDelay = '500ms';

    description.style.opacity = '1';
    description.style.transitionDelay = '500ms';
    
    if (widthScreen <= 450){
    description.style.margin = '150px auto 0 auto';
    } else{
    description.style.marginRight = '-700px';
    }

    sectionHeader.style.height = heightScreen + 'px';

    arrowLeft.style.opacity = '1';
    arrowLeft.style.transitionDelay = '500ms';

    arrowDown[0].style.opacity = "1";
    arrowDown[0].style.transitionDelay = '500ms';

    sectionHeader.scrollIntoView();

    for (let i = 0; i <siteArray.length; i++){
        siteArray[i].style.height = heightScreen + 'px';
    }
});









// --------------- ANIMATION SITE 2 -------------

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

let arrowUp = document.getElementsByClassName('fa-chevron-up');
console.log(arrowUp);

let githubSite1 = document.getElementById('lienGithubSite1');
// console.log(githubSite1);

let bgGithubSite1 = document.getElementsByClassName('fa-github-square');
bgGithubSite1 = bgGithubSite1[0];
// console.log(bgGithubSite1);












// -------- REDIRECTION AU SITE 2

let arrowDown1 = arrowDown[1];
console.log(arrowDown1);
// console.log(arrowDown);

// console.log(siteArray[1]);

arrowDown1.addEventListener('click', function(){
    setTimeout(function(){
        siteArray[1].scrollIntoView({behavior: "smooth"});
    }, 1100);

    titleLoopStudio.style.left = '0';
    titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
    titleLoopStudio.style.opacity = '0';

    bgTitleLoopStudio.style.width = '0';
    bgTitleLoopStudio.style.transition = 'width 1000ms';
    bgTitleLoopStudio.style.transitionDelay = '300ms';

    site1Page.style.backgroundColor = 'black';
    site1Page.style.transition = 'background-color 200ms';
    site1Page.style.transitionDelay = '500ms';

    imgSite1.style.height = '0';
    imgSite1.style.transition = 'height 1000ms, opacity 2s';
    imgSite1.style.opacity = '0';

    imgSite1Responsive.style.height = '0';
    imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
    imgSite1Responsive.style.opacity = '0';

    arrowUp[0].style.opacity = '0';
    arrowUp[0].style.transition = 'opacity 1s';

    arrowDown[1].style.opacity = '0';
    arrowDown[1].style.transition = 'opacity 1s';

    githubSite1.style.right = '-80px';
    githubSite1.style.opacity = '0';
    githubSite1.style.transition = 'right 1s, opacity 1000ms';
});

















// -------------- ANIMATION SITE 2 ------------------


// VARIABLES

let bgTitleSite2 = document.getElementById('bgTitleSite2');
// console.log(bgTitleSite2);

let titleSite2 = document.getElementById('titleSite2');
// console.log(titleSite2);

let divSite2 = document.getElementsByClassName('site-2');
divSite2 = divSite2[0];
console.log(divSite2);



// SCRIPT


// REDIRECTION




// TITLE

arrowDown[1].addEventListener('click', function(){

    if (screen.width > 450){

        setTimeout(() => {
            
            bgTitleSite2.style.width = '200px';

            titleSite2.style.left = '0px'
        }, 1500);
    }
});




















// ------ RESPONSIVE 

if (widthScreen <= 450){
    // document.body.style.overflow = 'auto'

    // for (let i = 0; i < siteArray.length; i++){
    //     siteArray[i].style.display = 'none';
    // }

    // if (arrowUp.style.opacity == '0'){   REMPLACER PAR UNE VARIABLE BOOLEENNE
    //     document.body.style.overflow = 'hidden';
    // }


    // --------- PAGE D'ACCUEIL


    document.addEventListener('DOMContentLoaded', function(){
        titlePortfolio.style.opacity = '1';
        titlePortfolio.style.marginLeft = '0px';
        titlePortfolio.style.transitionDelay = '500ms';
    
        description.style.opacity = '1';
        description.style.transitionDelay = '500ms';
        
        if (widthScreen <= 450){
        description.style.margin = '150px auto 0 auto';
        } else{
        description.style.marginRight = '100px';
        }
    
        sectionHeader.style.height = heightScreen + 'px';
    
        arrowLeft.style.opacity = '1';
        arrowLeft.style.transitionDelay = '500ms';
    
        arrowDown[0].style.opacity = "1";
        arrowDown[0].style.transitionDelay = '500ms';
    
        sectionHeader.scrollIntoView();
    
        for (let i = 0; i <siteArray.length; i++){
            siteArray[i].style.height = heightScreen + 'px';
        }
    });

    arrowDown[0].addEventListener('click', function(){

        sectionHeader.style.opacity ='0';
        sectionHeader.style.transition = 'opacity 800ms';

        site1Page.style.display = 'block';

        setTimeout(() => {
            siteArray[0].scrollIntoView({behavior: "smooth"});
        }, 1000);
    
        titleLoopStudio.style.left = '50px';
        titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
        titleLoopStudio.style.transitionDelay = '1000ms';
        titleLoopStudio.style.opacity = '1';
    
        bgTitleLoopStudio.style.width = '250px';
        bgTitleLoopStudio.style.transition = 'width 1000ms';
        bgTitleLoopStudio.style.transitionDelay = '800ms';
    
        site1Page.style.backgroundColor = '#342670';
        site1Page.style.transition = 'background-color 1s';
    
        imgSite1.style.height = '480px';
        imgSite1.style.transition = 'height 1000ms, opacity 2s';
        imgSite1.style.transitionDelay = '1000ms';
        imgSite1.style.opacity = '1';
    
        imgSite1Responsive.style.height = '470px';
        imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
        imgSite1Responsive.style.transitionDelay = '1000ms';
        imgSite1Responsive.style.opacity = '1';
    
        arrowUp[0].style.opacity = '1';
        arrowUp[0].style.transition = 'opacity 1s';
        arrowUp[0].style.transitionDelay = '1000ms';

        arrowDown[1].style.opacity = '1';
        arrowDown[1].style.transition = 'opacity 1s';
        arrowDown[1].style.transitionDelay = '1000ms';
    
        githubSite1.style.left = '50px';
        githubSite1.style.transition = 'left 1s, opacity 10ms';
        githubSite1.style.transitionDelay = '2000ms';
        githubSite1.style.opacity = '1';
    });

    imgSite1.addEventListener('click', function(){
        imgSite1.style.zIndex = '3';
        imgSite1.style.boxShadow = '0 0 100px black';
        imgSite1.style.transition = 'box-shadow 1s, z-index 1s';

        imgSite1Responsive.style.zIndex = '2';
        imgSite1Responsive.style.boxShadow = '0 0 0 black';
        imgSite1Responsive.style.transition = 'box-shadow 1s';
    });

    imgSite1Responsive.addEventListener('click', function(){
        imgSite1Responsive.style.zIndex = '3';
        imgSite1Responsive.style.boxShadow = '0 0 100px black';
        imgSite1Responsive.style.transition = 'box-shadow 1s';

        imgSite1.style.zIndex = '2';
        imgSite1.style.boxShadow = '0 0 0 black';
        imgSite1.style.transition = 'box-shadow 1s, z-index 1s';
    });

    arrowUp[0].addEventListener('click', function(){
        setTimeout(function(){
            sectionHeader.scrollIntoView({behavior: "smooth"});
        }, 1100);

        sectionHeader.style.opacity ='1';
        sectionHeader.style.transition = 'opacity 800ms';
        sectionHeader.style.transitionDelay = '1300ms';
    
        titleLoopStudio.style.left = '0';
        titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
        titleLoopStudio.style.opacity = '0';
    
        bgTitleLoopStudio.style.width = '0';
        bgTitleLoopStudio.style.transition = 'width 1000ms';
        bgTitleLoopStudio.style.transitionDelay = '300ms';
    
        site1Page.style.backgroundColor = 'black';
        site1Page.style.transition = 'background-color 200ms';
        site1Page.style.transitionDelay = '1000ms';
    
        imgSite1.style.height = '0';
        imgSite1.style.transition = 'height 1000ms, opacity 2s';
        imgSite1.style.opacity = '0';
    
        imgSite1Responsive.style.height = '0';
        imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
        imgSite1Responsive.style.opacity = '0';
    
        arrowUp[0].style.opacity = '0';
        arrowUp[0].style.transition = 'opacity 1s';
        arrowUp[0].style.transitionDelay = '1000ms';

        arrowDown[1].style.opacity = '0';
        arrowDown[1].style.transition = 'opacity 1s';
        arrowDown[1].style.transitionDelay = '1000ms';
    
        githubSite1.style.left = '-80px';
        githubSite1.style.opacity = '0';
        githubSite1.style.transition = 'left 1s, opacity 1000ms';
    });

} else {

    arrowDown[0].addEventListener('click', function(){
        siteArray[0].scrollIntoView({behavior: "smooth"});
    });
    
    arrowDown[0].addEventListener('click', function(){
    
        titleLoopStudio.style.left = '30px';
        titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
        titleLoopStudio.style.transitionDelay = '1000ms';
        titleLoopStudio.style.opacity = '1';
    
        bgTitleLoopStudio.style.width = '200px';
        bgTitleLoopStudio.style.transition = 'width 1000ms';
        bgTitleLoopStudio.style.transitionDelay = '800ms';
    
        site1Page.style.backgroundColor = '#342670';
        site1Page.style.transition = 'background-color 1s';
    
        imgSite1.style.height = '500px';
        imgSite1.style.transition = 'height 1000ms, opacity 2s';
        imgSite1.style.transitionDelay = '1000ms';
        imgSite1.style.opacity = '1';
    
        imgSite1Responsive.style.height = '500px';
        imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
        imgSite1Responsive.style.transitionDelay = '1000ms';
        imgSite1Responsive.style.opacity = '1';
    
        arrowUp[0].style.opacity = '1';
        arrowUp[0].style.transition = 'opacity 1s';
        arrowUp[0].style.transitionDelay = '1000ms';

        arrowDown[1].style.opacity = '1';
        arrowDown[1].style.transition = 'opacity 1s';
        arrowDown[1].style.transitionDelay = '1000ms';
    
        githubSite1.style.right = '50px';
        githubSite1.style.transition = 'right 1s, opacity 10ms';
        githubSite1.style.transitionDelay = '2000ms';
        githubSite1.style.opacity = '1';
    });
    
    arrowUp[0].addEventListener('click', function(){
        setTimeout(function(){
            sectionHeader.scrollIntoView({behavior: "smooth"});
        }, 1100);
    
        titleLoopStudio.style.left = '0';
        titleLoopStudio.style.transition = 'left 500ms, opacity 1s';
        titleLoopStudio.style.opacity = '0';
    
        bgTitleLoopStudio.style.width = '0';
        bgTitleLoopStudio.style.transition = 'width 1000ms';
        bgTitleLoopStudio.style.transitionDelay = '300ms';
    
        site1Page.style.backgroundColor = 'black';
        site1Page.style.transition = 'background-color 200ms';
        site1Page.style.transitionDelay = '1000ms';
    
        imgSite1.style.height = '0';
        imgSite1.style.transition = 'height 1000ms, opacity 2s';
        imgSite1.style.opacity = '0';
    
        imgSite1Responsive.style.height = '0';
        imgSite1Responsive.style.transition = 'height 1000ms, opacity 2s';
        imgSite1Responsive.style.opacity = '0';
    
        arrowUp[0].style.opacity = '0';
        arrowUp[0].style.transition = 'opacity 1s';

        arrowDown[1].style.opacity = '0';
        arrowDown[1].style.transition = 'opacity 1s';
    
        githubSite1.style.right = '-80px';
        githubSite1.style.opacity = '0';
        githubSite1.style.transition = 'right 1s, opacity 1000ms';
    });

    imgSite1.addEventListener('mouseenter', function(){
        imgSite1.style.position = 'relative';
        imgSite1.style.transition = 'box-shadow 1s, z-index 1s';
        imgSite1.style.boxShadow = '0 0 100px black';

        imgSite1Responsive.style.left = '920px';
        imgSite1Responsive.style.transition = 'left 1s, box-shadow 1s';
        imgSite1Responsive.style.boxShadow = ' 0 0 0px black';

        setTimeout(() => {
        imgSite1Responsive.style.left = '850px';
        }, 1000);

        setTimeout(() => {
        imgSite1.style.zIndex = '3';
        }, 800);

    });

    imgSite1.addEventListener('mouseleave', function(){
        imgSite1.style.position = 'relative';
        imgSite1.style.boxShadow = '0 0 0px black';
        imgSite1.style.transition = 'box-shadow 1s, z-index 1s';

        imgSite1Responsive.style.boxShadow = ' 0 0 100px black';

        imgSite1Responsive.style.left = '920px';
        imgSite1Responsive.style.transition = 'left 1s, box-shadow 1s';

        setTimeout(() => {
        imgSite1Responsive.style.left = '850px';
        }, 1000);

        setTimeout(() => {
        imgSite1.style.zIndex = '2';
        }, 800);
    });
}

githubSite1.addEventListener('mouseenter', function(){
    bgGithubSite1.style.backgroundColor = '#D548EB';
    bgGithubSite1.style.transition = 'background-color 300ms';
});

githubSite1.addEventListener('mouseleave', function(){
    bgGithubSite1.style.backgroundColor = 'white';
    bgGithubSite1.style.transition = 'background-color 300ms';
});