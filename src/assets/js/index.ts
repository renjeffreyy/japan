import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
    
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline()

timeline.to(".scroll-content", {
    scrollTrigger: {
        trigger: ".scroll-wrapper",
        scrub: 1,
        markers:true,
        start: "top",
        end: "bottom",
    },
    x: 500
  });

console.log(timeline)