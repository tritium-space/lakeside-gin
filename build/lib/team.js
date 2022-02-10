const assetsFolder = location.origin + "/assets/portrait/"
const teamMembers = [
    "Andy",
    "Roger",
    "Philipp",
    "Armin",
    "Nils",
    "Paul",
    "Beat",
    "Gerold"
];

const e = document.querySelector("[data-js=team]");

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(teamMembers);

for (const member of teamMembers) {
    p = document.createElement("div");
    p.classList.add("partner");
    img = document.createElement("img");
    img.src = `${assetsFolder}${member.toLowerCase()}-min.jpg`;
    n = document.createElement("div");
    n.classList.add("name");
    h = document.createElement("h1");
    h.innerText = member;
    n.appendChild(h);
    p.appendChild(img);
    p.appendChild(n);
    e.appendChild(p);
}
