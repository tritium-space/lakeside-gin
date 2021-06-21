const localStorageTokenName = "sdAgeCheck";
const token = "true";

const ageCheckID = "age-check";
const monthInputID = "month-input";
const yearInputID = "year-input";

const dayInput = (input => {
    if (valid(input) && input <= 31) {
        document.getElementById(monthInputID).focus();
    }
});

const monthInput = (input => {
    if (valid(input) && input <= 12) {
        document.getElementById(yearInputID).focus();
    }
});

const yearInput = (() => {
    
});

const valid = (s => {
    return !isNaN(s) && s.length == 2;
});

const setVerified = (() => {
    localStorage.setItem(localStorageTokenName, token);
});

const verified = (() => {
    const sufficientAge = localStorage.getItem(localStorageTokenName);
    return sufficientAge == token;
});

const initAgeCheck = (() => {
    e = document.getElementById(ageCheckID);
    if (!verified()) {
        document.getElementById("body").style.overflow = "hidden";
        e.style.visibility = "visible";
    }
});

(function main() {
    initAgeCheck();
})();