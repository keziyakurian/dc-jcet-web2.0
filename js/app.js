
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

