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
        "fade-up": { opacity: 0, y: 80, ease: "power3.out" },
        "fade-down": { opacity: 0, y: -80, ease: "power3.out" },
        "fade-left": { opacity: 0, x: -80, ease: "sine.out" },
        "fade-right": { opacity: 0, x: 80, ease: "power3.out" },
        "zoom-in": { opacity: 0, scale: 0.8, ease: "power3.out" },
        "zoom-out": { opacity: 0, scale: 1.2, ease: "power3.out" },
        "rotate": { opacity: 0, rotate: -10, ease: "power3.out" },
      };

      const animation = settings[animationType] || settings["fade-up"];

      gsap.set(el, animation);

      gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.2,
        delay: index * 0.5,
        ease: animation.ease,
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: "top 80%",
          scrub: 2,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
};

export default useGsapReveal;

