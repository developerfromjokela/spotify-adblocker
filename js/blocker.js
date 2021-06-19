chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        if (request && request.url) {
            if (request.url.includes("storage-resolve/files/")) {
                console.log("[SPAB] -> Found AD Request!");
                return {cancel: true};
            }
        }
    },
    {
        urls: ["*://*.spotify.com/*"]
    },
    ["blocking"]
);

console.log("[SPAB] -> Initialized!");