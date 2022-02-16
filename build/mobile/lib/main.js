const mobileNavigationDiv = document.querySelector("[data-js='mobile-navigation']")
const navItemList = Array.from(document.getElementsByClassName("mobile-navigation-item"))
const interval = 150
const mobileNavContainer = document.querySelector("[data-js='mobile-navigation-container']");
const hamburgerDiv = document.querySelector("[data-js='hamburger']")

setTimeout(function () {
    document.body.classList.remove("preload");
}, 500);

hamburgerDiv.addEventListener("click", () => {
    if (hamburgerDiv.dataset.status == "open") {
        hamburgerDiv.dataset.status = "closed";
        hamburgerDiv.classList.remove("open");
        mobileNavigationDiv.classList.remove("mobile-navigation--visible");
    } else {
        hamburgerDiv.dataset.status = "open";
        hamburgerDiv.classList.add("open");
        mobileNavigationDiv.classList.add("mobile-navigation--visible");
    }
})