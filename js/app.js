
      gsap.registerPlugin(ScrollTrigger);
                      
      // var gsapAnim = gsap.timeline();
      
      var sca= gsap.timeline(
      {
          scrollTrigger: {
                trigger: ".scroll_1", 
                start:" top top",
                end: "+=100% ",
                markers:true,
                scrub:true,
                pin:true
              }                   
        });
        gsap.from('.heading1',{

          scale:0
        })
        gsap.to('.heading1',{
          scale:1
        })

        sca.to('.heading1',{

          scale:1

        })
        sca.to('.heading1',{

          scale:1

        })
        sca.to('.heading1',{

          scale:20,
          opacity:0,
          display:'none'

        })
        // scroll 1 ends here ! 
      
        sca.from('.heading-2',{

          scale:0
        })
      
        sca.to('.heading-2',{

          scale:1
        })
      
      
        sca.to('.heading-2',{

          scale:20,
          opacity:1,
          display:'none'
        })

        sca.from('.heading-3',{

          scale:0
        })
      
        sca.to('.heading-3',{

          scale:1
        })
      
      
        sca.to('.heading-3',{

          scale:20,
          opacity:1,
          display:'none'
        })

        sca.from('.heading-4',{

          scale:0
        })
      
        sca.to('.heading-4',{

          scale:1
          
        })
      
      
        sca.to('.heading-4',{

          scale:20,
          opacity:1,
          display:'none'
        })

        

        // canvas animation
        var canvas = document.getElementById('space_box');
var c = canvas.getContext('2d');

var innerWidth = window.innerWidth - 20,
    innerHeight = window.innerHeight - 20,
	radius = 1,
	starsIndex = 0,
	stars = [],
	TWO_PI = Math.PI*2,
	centerX = innerWidth/2,
	centerY = innerHeight/2,
	focalLength = 500,
	starRadius = null,
	starX = null,
	starY = null,
	numStars = 2000,
	mouse = {},
	starX_dir = 0,
	starY_dir = 0;

	canvas.width = innerWidth;
	canvas.height = innerHeight;
	
	
// Move the stars with mouse pointer

window.addEventListener('mousemove', function(e){
   mouse.x = e.x;
   mouse.y = e.y;
   
   if(mouse.x < centerX){
     starX_dir += 5;
   }else{
     starX_dir += -5;
   }
   
   if(mouse.y < centerY){
     starY_dir += 5;
   }else{
     starY_dir += -5;
   }
   
});

// Zoom in/out into the Space on mouse scroll
canvas.addEventListener('mousewheel', function(e){
   if(e.deltaY < 0){
     focalLength *= 0.5;
   }else{
     focalLength /= 0.5;
   }
   
   if(focalLength >= innerWidth){
     focalLength = innerWidth - 50;
   }else if(focalLength < 100){
     focalLength = 100;
   }
   
}, false);

	
// Function for create new start
function star(x,y,z){
    this.x = x;
	this.y = y;
	this.z = z;
	this.radius = radius;
	this.color = "#fff";
	starsIndex++;
	stars[starsIndex] = this;
	this.id = starsIndex;
	
	// Animate Stars
	this.update = function(){
	  starX = (this.x - centerX) * (focalLength / this.z);
	  starX += centerX;
	  
	  starY = (this.y - centerY) * (focalLength / this.z);
	  starY += centerY;
	  
	  starRadius = radius * (focalLength / this.z);
	  
	  starX += starX_dir;
	  starY += starY_dir;
	  
	  this.z += -10;
	  
	  if(this.z <= 0){
	     this.z = parseInt(innerWidth);
	  }
	  
	  this.draw();
	
	}
	
	// Function for draw star
	this.draw = function(){
		c.beginPath();
		c.arc(starX,starY,starRadius, TWO_PI, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	}
	
}	

// X,Y,Z values
var s;
for(s = 0; s < numStars; s++){
	x = Math.random() * innerWidth;
	y = Math.random() * innerHeight;
	z = Math.random() * innerWidth;
	new star(x,y,z);
}

// Function for animate canvas objects
function animate(){
    requestAnimationFrame(animate);
	c.fillStyle = "#000";
	c.fillRect(0,0,innerWidth,innerHeight);
	
	for( var i in stars){
	  stars[i].update();
	}
}

animate();

