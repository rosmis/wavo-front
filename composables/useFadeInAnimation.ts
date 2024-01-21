export function useFadeInAnimation(itemsClass: string) {
    const { $gsap: gsap, $Power2: Power2 } = useNuxtApp();

    gsap.to(`.${itemsClass}`, {
        opacity: 1,
        duration: 0.5,
        ease: Power2.easeInOut,
        delay: 0.7,
    });
}
