export const useScrollTrigger = (elements: string[]) => {
    const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();

    elements.forEach((el) => {
        ScrollTrigger.create({
            trigger: `.${el}`,
            // markers: true,
            start: "top 95%",
            end: "bottom 80%",
            animation: useBlindRevealAnimation(el),
        });
    });
};
