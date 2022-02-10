let options = {
    root: document.getElementsByClassName("mobile-scroller")[0],
    rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver(function (entries) {
    scrollerOverlayItems = Array.from(document.getElementsByClassName("scroller-overlay-item"))
    scrollerOverlayItems.forEach(
        item => {
            item.classList.remove("active-section")
        }
    )

    entries.forEach(
        entry => {
            if (entry.isIntersecting) {
                let item = document.querySelector("[data-js='" + entry.target.id + "']")
                if (!item.parentElement.classList.contains("shown-scroller-overlay")) {
                    item.parentElement.classList.add("shown-scroller-overlay")
                }
                item.classList.add("active-section")
            }
        }
    )
}, options);
let targets = Array.from(document.getElementsByClassName("slide"));
targets.forEach(element => {
    observer.observe(element);
});
