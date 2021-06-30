if (window.matchMedia("(max-width: 768px)").matches) {
    let options = {
        root: document.getElementsByClassName("main-page-scroller")[0],
        rootMargin: '0px',
        threshold: 0.5
    }

    let observer = new IntersectionObserver(function(entries) {
        scrollerOverlayItems = Array.from(document.getElementsByClassName("scroller-overlay-item"))
        scrollerOverlayItems.forEach(
            item => {
                item.classList.remove("active-section")
                item.classList.add("inactive-section")
            }
        )
    
        entries.forEach(
            entry => {
                if (entry.isIntersecting) {
                    let item = document.querySelector("[data-js='" + entry.target.id +"']")
                    item.classList.remove("inactive-section")
                    item.classList.add("active-section")
                }
            }
        )
    }, options);
    let targets = Array.from(document.getElementsByClassName("overlay-container"));
    targets.forEach(element => {
        observer.observe(element);
    });
}