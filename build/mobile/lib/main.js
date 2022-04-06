const mobileNavigationDiv = document.querySelector("[data-js='mobile-navigation']")
const navItemList = Array.from(document.getElementsByClassName("mobile-navigation-item"))
const interval = 150
const mobileNavContainer = document.querySelector("[data-js='mobile-navigation-container']");
const hamburgerDiv = document.querySelector("[data-js='hamburger']")

const mobileScroller = document.getElementsByClassName("mobile-scroller")[0];
const scrollerOverlay = document.getElementsByClassName("scroller-overlay")[0]

setTimeout(function () {
    document.body.classList.remove("preload");
}, 500);

hamburgerDiv.addEventListener("click", () => {
    if (hamburgerDiv.dataset.status == "open") {
        exitMenu();
        mobileScroller.removeEventListener("click", exitMenu);
        scrollerOverlay.removeEventListener("click", exitMenu);
    } else {
        openMenu();
        mobileScroller.addEventListener("click", exitMenu);
        scrollerOverlay.addEventListener("click", exitMenu);
    }
})

const exitMenu = () => {
    hamburgerDiv.dataset.status = "closed";
    hamburgerDiv.classList.remove("open");
    mobileNavigationDiv.classList.remove("mobile-navigation--visible");
}

const openMenu = () => {
    hamburgerDiv.dataset.status = "open";
    hamburgerDiv.classList.add("open");
    mobileNavigationDiv.classList.add("mobile-navigation--visible");
}
