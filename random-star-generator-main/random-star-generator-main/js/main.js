
const intro =document.querySelector('.intro');
const text= intro.querySelector('h1');

const textAnim =TweenMax.fromTo(text, 5, {opacity:0},{opacity:1});
const section =document.querySelector(".section");
const end=section.querySelector('h2');
