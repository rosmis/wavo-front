import { gsap, Power2, Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
    }

    return {
        provide: {
            gsap,
            Draggable,
            ScrollTrigger,
            Power2,
            Power3,
            Power4,
        },
    };
});
