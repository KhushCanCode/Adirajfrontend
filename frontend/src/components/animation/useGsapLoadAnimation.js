import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useGsapLoadAnimations = () => {
    useEffect(() => {
      const elements = gsap.utils.toArray("[data-load-animation]");
  
      elements.forEach((el, index) => {
        const animationType = el.getAttribute("data-load-animation") || "fade-up";
  
        let settings = {
          "fade-up": { opacity: 0, y: 50, ease: "power3.out" },
          "fade-down": { opacity: 0, y: -50, ease: "power3.out" },
        };
  
        const animation = settings[animationType] || settings["fade-up"];
  
        gsap.fromTo(
          el,
          animation,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: index * 0.3, // Adds a stagger effect
            ease: animation.ease,
          }
        );
      });
    }, []);
  };
  
  export default useGsapLoadAnimations;