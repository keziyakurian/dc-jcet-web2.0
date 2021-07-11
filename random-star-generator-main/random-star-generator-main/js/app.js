const container = document.querySelector('.container');

// var a = Math.random()*1000;

// var maxLimit = 1999

// var randomPosition =(maxLimit)=>{

//     return Math.random()*maxLimit;
// }



// function generateStar(){


    

    



// }

// generateStar();

const maxLimit = 1000

for (let step = 0; step < maxLimit; step++) {

//     const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
//     let hexColor='#';

//     const getRandomNumber = () => {

//         return Math.floor(Math.random() * hex.length )
//     }


//     for(let i = 0; i < 6; i++) {

//         hexColor += hex[getRandomNumber()]
//     }

// console.log(hexColor);



var star = document.createElement('div');

star.classList.add('star');
container.appendChild(star);

let  starStyle = star.style

let randomX = Math.floor(Math.random()*2000);
let randomY = Math.floor(Math.random()*2000);
let randomScale = (Math.random()*0.5);


starStyle.left =`${randomX}px`;
starStyle.top=`${randomY}px`;
starStyle.borderRadius = "50%"
starStyle.transform = `scale(${randomScale})`;
// starStyle.backgroundColor = hexColor;


  }
  