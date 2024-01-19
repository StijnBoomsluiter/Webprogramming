$(document).ready(function(){
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to(".laptop", { translateX: "90px", duration: 10, ease: "power1.inOut" }) 
      .to(".laptop", { translateX: "0px", duration: 10, ease: "power1.inOut" });


      gsap.from(".beste", {
        translateX: "-1700px",
        duration: 1,
        ease: "power2.out",
        delay: 1,
        
    });


    gsap.from(".studie", {
        x: "-700",
        duration: 1,
        ease: "power2.out",
        delay: 1,
    });
});

