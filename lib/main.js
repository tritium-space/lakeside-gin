const HEADER = "header";

const h = document.getElementById(HEADER);

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        h.classList.remove("enlarged");
        h.classList.add("shrunk");
    } else {
        h.classList.remove("shrunk");
        h.classList.add("enlarged");
    }
}