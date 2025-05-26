// if(navigator.serviceWorker){
//     navigator.serviceWorker.register("/sw.js");
// }

if("serviceWorker" in navigator){
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration);
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
    });
}

