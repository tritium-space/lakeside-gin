if (window.matchMedia("(max-width: 768px)").matches) {
    const mobileNavigationDiv = document.querySelector("[data-js='mobile-navigation']")
    const navItemList = Array.from(document.getElementsByClassName("mobile-navigation-item"))
    const hamburgerDiv = document.querySelector("[data-js='hamburger']")
    const interval = 200

    hamburgerDiv.addEventListener("click", () => {
        if (hamburgerDiv.dataset.status == "open") {
            mobileNavigationDiv.classList.remove("shown-mobile-navigation")
            mobileNavigationDiv.classList.add("hidden-mobile-navigation")
            navItemList.forEach(
                (item, index) => {
                    setInterval(() => {
                        item.classList.add("hidden-mobile-navigation-item")
                        item.classList.remove("shown-mobile-navigation-item")
                    }, index * interval)
                }
            )
            hamburgerDiv.dataset.status = "closed"
        } else {
            mobileNavigationDiv.classList.remove("hidden-mobile-navigation")
            mobileNavigationDiv.classList.add("shown-mobile-navigation")
            navItemList.forEach(
                (item, index) => {
                    setInterval(() => {
                        item.classList.remove("hidden-mobile-navigation-item")
                        item.classList.add("shown-mobile-navigation-item")
                    }, index * interval)
                }
            )
            hamburgerDiv.dataset.status = "open"
        }
    })

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
                    if (!item.parentElement.classList.contains("shown-scroller-overlay")) {
                        item.parentElement.classList.add("shown-scroller-overlay")
                    }
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
    observer.observe(document.getElementById("footer"))
}