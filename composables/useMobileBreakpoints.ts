import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export function useMobileBreakpoints(breakpoint: "sm" | "md") {
    const breakpoints = useBreakpoints(breakpointsTailwind);
    const isMobile = breakpoints.smaller(breakpoint);

    return isMobile;
}
