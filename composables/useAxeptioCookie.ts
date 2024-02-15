export function useAxeptioCookie() {
    const config = useRuntimeConfig();

    window.axeptioSettings = {
        clientId: config.public.axeptioClientId,
        cookiesVersion: "en-25-01-2024",
    };

    return (function (d, s) {
        var t = d.getElementsByTagName(s)[0],
            e = d.createElement(s);
        e.async = true;
        e.src = "//static.axept.io/sdk.js";
        t.parentNode.insertBefore(e, t);
    })(document, "script");
}
