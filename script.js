$(document).ready(function() {

    $('#darkblue-box').on('click', function() {
        gsap.to("#darkblue-box", 1, {x: 550})
        gsap.to("#image-container-darkblue", 1, {x: 1})



        gsap.to("#blue-box", 1, {x: 550})
        gsap.to("#orange-box", 1, {x: 550})

      });


    $('#blue-box').on('click', function() {
        gsap.to("#blue-box", 1, {x: 550})
        gsap.to("#image-container-blue", 1, {x: 1})

        gsap.to("#darkblue-box", 1, {x: 550})
        gsap.to("#orange-box", 1, {x: 550})

    })


    $('#orange-box').on('click', function() {
        gsap.to("#orange-box", 1, {x: 550})
        gsap.to("#image-container-orange", 1, {x: 1})

        gsap.to("#darkblue-box", 1, {x: 550})
        gsap.to("#blue-box", 1, {x: 550})
    })      


//end document ready
});