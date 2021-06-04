'use strict';

let screenHeight = window.innerHeight;
// console.log(screenHeight);

let body = document.getElementsByTagName('body');
console.log(body);

document.addEventListener('DOMContentLoaded', function(){
    body[0].style.height = screenHeight + 'px';
    body[0].style.opacity = '1';
    body[0].style.transition = 'opacity 1000ms';
    body[0].style.transitionDelay = '1000ms';
})