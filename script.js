$(document).ready(function(){
    var tl = gsap.timeline({ repeat: -1 });

    tl.to(".coolblue", {
        scale: 1.15,
        duration: 0.5,
        ease: "power2.out" 
    })
    .to(".coolblue", {
        scale: 1,
        duration: 1,
        ease: "power2.in"
    });
});
