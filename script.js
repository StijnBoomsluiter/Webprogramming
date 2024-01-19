$(document).ready(function(){
    var tl = gsap.timeline({ repeat: -1 });

    tl.to(".app", {
        scale: 1.1, 
        duration: 1, 
        ease: "power2.out" 
    })
    .to(".app", {
        scale: 1, 
        duration: 1, 
        ease: "power2.in" 
    });
});
