if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.replace("mobile/index.html");
} else {
    setTimeout(function () {
        document.body.classList.remove("preload");
    }, 600);

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

    (function main() {
        // initScrollCapture();
    })();
}

function reloadPage() {
    location.reload(true);
}
