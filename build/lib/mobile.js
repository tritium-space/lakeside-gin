const mobileNavigationDiv = document.querySelector("[data-js='mobile-navigation']")
const navItemList = Array.from(document.getElementsByClassName("mobile-navigation-item"))
const mobileNavContainer = document.querySelector("[data-js='mobile-navigation-container']");
const hamburgerDiv = document.querySelector("[data-js='hamburger']")
const interval = 150

setTimeout(function () {
    document.body.classList.remove("preload");
}, 500);

hamburgerDiv.addEventListener("click", () => {
    if (hamburgerDiv.dataset.status == "open") {
        hamburgerDiv.classList.remove("open");
        navItemList.slice().reverse().forEach(
            (item, index) => {
                setTimeout(() => {
                    item.classList.remove("shown-mobile-navigation-item")
                    item.classList.add("hidden-mobile-navigation-item")
                }, index * 1 / 4 * interval)
            }
        )
        setTimeout(() => {
            mobileNavigationDiv.classList.remove("mobile-navigation--visible");
            hamburgerDiv.dataset.status = "closed";
            mobileNavContainer.classList.remove("mobile-navigation-container--hidden");
        }, 50)
    } else {
        hamburgerDiv.classList.add("open");
        mobileNavigationDiv.classList.add("mobile-navigation--visible");
        mobileNavContainer.classList.remove("mobile-navigation-container--hidden");
        navItemList.forEach(
            (item, index) => {
                setTimeout(() => {
                    item.classList.remove("hidden-mobile-navigation-item")
                    item.classList.add("shown-mobile-navigation-item")
                }, index * interval)
            }
        )
        hamburgerDiv.dataset.status = "open"
    }
})

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
            item.classList.add("inactive-section")
        }
    )

    entries.forEach(
        entry => {
            if (entry.isIntersecting) {
                let item = document.querySelector("[data-js='" + entry.target.id + "']")
                if (!item.parentElement.classList.contains("shown-scroller-overlay")) {
                    item.parentElement.classList.add("shown-scroller-overlay")
                }
                item.classList.remove("inactive-section")
                item.classList.add("active-section")
            }
        }
    )
}, options);
let targets = Array.from(document.getElementsByClassName("slide"));
targets.forEach(element => {
    observer.observe(element);
});
