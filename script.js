$(document).ready(function() {

    $('.knop1').on('click', function() {
        gsap.to(".producten", 1, {x: 550})
        gsap.to(".container", 1, {x: 550})
        gsap.to(".knop1", 1, {x: 550})
        gsap.to(".knop2", 1, {x: 550})
        gsap.to(".tekst2", 1, {x: 550})


        gsap.to(".macbook", 1, {x: 1450})
        gsap.to(".prijskaart1", 1, {x: 330})
        gsap.to(".container2", 1, {x: 2})

        var tl = gsap.timeline({ repeat: -1 });
      
        tl.to(".prijskaart1", {
            scale: 1.2,
            duration: 1, 
            ease: "power2.out",
        })
        .to(".prijskaart1", {
            scale: 1,
            duration: 1,
            ease: "power2.in",

        });    

        gsap.fromTo(".ballonOne", {y:1110}, {y: 10, duration: 3, repeat: -1, delay: 1});

        gsap.fromTo(".ballonTwo", {y:-1380}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonThree", {y:-1350}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonFour", {y:-1320}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonFive", {y:-1320}, {y: 30, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonSix", {y:-1320}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon1", {y:-1390}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon2", {y:-1380}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon3", {y:-1350}, {y: 30, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon4", {y:-1320}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon5", {y:-1320}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon6", {y:-1320}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon7", {y:-1390}, {y: 30, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon8", {y:-1380}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon9", {y:-1350}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon10", {y:-1320}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon11", {y:-1320}, {y: 30, duration: 3, repeat: -1, delay: 1});

      });     

      $('.knop2').on('click', function() {
        gsap.to(".producten", 1, {x: 550})
        gsap.to(".container", 1, {x: 550})
        gsap.to(".knop1", 1, {x: 550})
        gsap.to(".knop2", 1, {x: 550})
        gsap.to(".tekst2", 1, {x: 550})


        gsap.to(".ipad", 1, {x: 1550})
        gsap.to(".prijskaart2", 1, {x: 310})
        gsap.to(".container3", 1, {x: 2})

          var tl = gsap.timeline({ repeat: -1 });
      
          tl.to(".prijskaart2", {
              scale: 1.2,
              duration: 1, 
              ease: "power2.out",
          })
          .to(".prijskaart2", {
              scale: 1,
              duration: 1,
              ease: "power2.in",

          });    


        gsap.fromTo(".ballonOne", {y:1110}, {y: 10, duration: 3, repeat: -1, delay: 1});

        gsap.fromTo(".ballonTwo", {y:-1380}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonThree", {y:-1350}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonFour", {y:-1320}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonFive", {y:-1320}, {y: 30, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballonSix", {y:-1320}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon1", {y:-1390}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon2", {y:-1380}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon3", {y:-1350}, {y: 30, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon4", {y:-1320}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon5", {y:-1320}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon6", {y:-1320}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon7", {y:-1390}, {y: 30, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon8", {y:-1380}, {y: 90, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon9", {y:-1350}, {y: 40, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon10", {y:-1320}, {y: 100, duration: 3, repeat: -1, delay: 1});
  
        gsap.fromTo(".ballon11", {y:-1320}, {y: 30, duration: 3, repeat: -1, delay: 1});
      });     

      

});
