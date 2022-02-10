const preventionSite = "https://suchtpraevention-zh.ch/safer-use-und-sucht/alkohol/";
const localStorageTokenName = "sdAgeCheck";
const token = "true";

const body = document.querySelector("body");
const ageCheck = document.querySelector("[data-js='age-check']");

function closePrompt() {
    body.style.overflow = "scroll";
    ageCheck.style.visibility = "hidden";
    ageCheck.remove();
}

function openPrompt() {
    body.style.overflow = "hidden";
    ageCheck.style.visibility = "visible";
}

function verified() {
    return localStorage.getItem(localStorageTokenName) == token;
};

function setVerified() {
    localStorage.setItem(localStorageTokenName, token);
};

function c() {
    setVerified();
    closePrompt();
}

function help() {
    window.location.href = preventionSite;
}

if (!verified()) {
    openPrompt();
}
