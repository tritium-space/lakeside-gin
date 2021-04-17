const initScrollCapture = () => {
    const HEADER = "header";
    const LOGO_CONTAINER = "logo-container";

    const h = document.getElementById(HEADER);
    const l = document.getElementById(LOGO_CONTAINER);

    window.onscroll = () => {
        if (window.pageYOffset > 0) {
            h.classList.remove("enlarged");
            h.classList.add("shrunk");

            l.classList.remove("enlarged");
            l.classList.add("shrunk");
        } else {
            h.classList.remove("shrunk");
            h.classList.add("enlarged");

            l.classList.remove("shrunk");
            l.classList.add("enlarged");
        }
    }
}

const initShit = () => {
    setInterval(() => {
        console.count();
    }, 1000);
}

(function main() {
    initScrollCapture();
    initShit();
})();