const teamMembers = [
    {
        name: "Andy",
        src: "assets/portrait/andy-min.jpg"
    },
    {
        name: "Roger",
        src: "assets/portrait/roger-min.jpg"
    },
    {
        name: "Philipp",
        src: "assets/portrait/philipp-min.jpg"
    },
    {
        name: "Armin",
        src: "assets/portrait/armin-min.jpg"
    },
    {
        name: "Nils",
        src: "assets/portrait/nils-min.jpg"
    },
    {
        name: "Paul",
        src: "assets/portrait/paul-min.jpg"
    },
    {
        name: "Beat",
        src: "assets/portrait/beat-min.jpg"
    },
    {
        name: "Gerold",
        src: "assets/portrait/gerold-min.jpg"
    }
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
    img.src = member.src;
    n = document.createElement("div");
    n.classList.add("name");
    h = document.createElement("h1");
    h.innerText = member.name;
    n.appendChild(h);
    p.appendChild(img);
    p.appendChild(n);
    e.appendChild(p);
}
