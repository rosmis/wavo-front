export function useBlindRevealAnimation(itemsClass: string) {
    const { $gsap: gsap, $Power2: Power2 } = useNuxtApp();

    return gsap.to(`.${itemsClass}`, {
        transform: "translate(0, 0)",
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.1,
    });
}
