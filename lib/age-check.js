const preventionSite = "https://suchtpraevention-zh.ch/safer-use-und-sucht/alkohol/";
const localStorageTokenName = "sdAgeCheck";
const token = "true";

const dayInputID = "day-input";
const monthInputID = "month-input";
const yearInputID = "year-input";
const submitID = "submit";
const body = document.querySelector("[data-js='body']");
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

function calculateAge(birthday) {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function dayInput(input) {
    if (valid(input) && input <= 31) {
        document.getElementById(monthInputID).focus();
    }
};

function monthInput(input) {
    if (valid(input) && input <= 12) {
        document.getElementById(yearInputID).focus();
    }
};

function yearInput(input) {
    if (valid(input, 4)) {
        document.getElementById(submitID).focus();
    }
};

function valid(s, length = 2) {
    return !isNaN(s) && s.length == length;
};

function verified() {
    return localStorage.getItem(localStorageTokenName) == token;
};

function setVerified() {
    localStorage.setItem(localStorageTokenName, token);
};

function constructDate({ day, month, year }) {
    return new Date(year, month, day);
}

function getDateFromInputs() {
    return {
        year: document.getElementById(yearInputID).value,
        month: document.getElementById(monthInputID).value,
        day: document.getElementById(dayInputID).value
    }
}

function submit() {
    date = getDateFromInputs();
    if (date.year && date.month && date.day) {
        if (calculateAge(constructDate(date)) >= 18) {
            setVerified();
            closePrompt();
        } else {
            window.location.replace(preventionSite);
        }
    } else {
        alert("Invalid input");
    }
}

if (!verified()) {
    openPrompt();
}

document.getElementById(dayInputID).focus();