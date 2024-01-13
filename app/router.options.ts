import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) {
            return {
                top: 50,
                el: to.hash,
                behavior: "smooth",
            };
        }

        // if link is to same page, scroll to top with smooth behavior
        if (to === from) {
            return {
                left: 0,
                top: 0,
                behavior: "smooth",
            };
        }

        // this will use saved scroll position on browser forward/back navigation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    left: savedPosition?.left || 0,
                    top: savedPosition?.top || 0,
                });
            }, 500);
        });
    },
};
