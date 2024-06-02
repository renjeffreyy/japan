import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
    
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({

})


//pin section top
timeline.to("#HeroEl",{
    scrollTrigger:{
        trigger: ".scroll-wrapper",
        pin: true,
        start:"top",
        end: "2000px"
    },

}).from("#ScrollCylinder",{
    scrollTrigger:{
       trigger: "#HeroEl",
       scrub: 1,
       start: "top",
       end:"200"
    },
    scale:2,
    x:"50vw",

    rotate: "90deg"
}).from(".scroll-content", {
    scrollTrigger: {
        trigger: "#HeroEl",
        scrub: 3,
        markers:true,
         start: "500px",
         end: "center 200px",
    },
    x: `-200%`,
  });
