const localStorageTokenName = "sdAgeCheck";
const ageCheckID = "age-check";

const setLocalStorage = (() => {
    localStorage.setItem(localStorageTokenName, "true");
});

const checkLocalStorage = (() => {
    const sufficientAge = localStorage.getItem(localStorageTokenName);
    return sufficientAge == "true";
});

const initAgeCheck = (() => {
    e = document.getElementById(ageCheckID);
    !checkLocalStorage() ? e.style.visibility = "visible" : null;
});

(function main() {
    // initAgeCheck();
})();