import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapReveal = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray("[data-animation]");

    elements.forEach((el, index) => {
      const animationType = el.getAttribute("data-animation") || "fade-up";

      let settings = {
        "fade-up": { opacity: 0, y: 80 },
        "fade-down": { opacity: 0, y: -80 },
        "fade-left": { opacity: 0, x: -80 },
        "fade-right": { opacity: 0, x: 80 },
        "zoom-in": { opacity: 0, scale: 0.8 },
        "zoom-out": { opacity: 0, scale: 1.2 },
        "rotate": { opacity: 0, rotate: -10 },
      };

      const animation = settings[animationType] || settings["fade-up"];

      gsap.set(el, animation);

      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5, // Increase duration for smooth effect
        ease: "power2.out",
        stagger: 0.2, // Slight delay between elements
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Start when element is 80% visible
          end: "top 50%",
          scrub: true, // Makes animation smoother
          toggleActions: "play none none reverse", // Smooth fade-out
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};

export default useGsapReveal;
