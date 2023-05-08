window.onload = () => {
    const cards = [
        {
            id: 1,
            name: "Blue-Eyes White Dragon",
            attribute: "LIGHT",
            type: "Dragon",
            level: 8,
            cardType: "Normal",
            atk: 3000,
            def: 2500,
            dc: 95,
            passcode: 89631139,
            lore: `A legendary dragon that takes pride in its enormous power.
            Its powers of destruction far exceed comprehension.`
        },
        {
            id: 2,
            name: "Mystical Elf",
            attribute: "LIGHT",
            type: "Spellcaster",
            level: 4,
            cardType: "Effect",
            atk: 800,
            def: 2000,
            dc: 319,
            passcode: 15025844,
            lore: `An elf with blue skin, yellow hair, and light of element.
            It can power up Blue-Eyes White Dragons on the own field.`
        },
        {
            id: 3,
            name: "Hitotsu-Me Giant",
            attribute: "FIEND",
            type: "Beast-Warrior",
            level: 4,
            cardType: "Normal",
            atk: 1200,
            def: 1000,
            dc: 121,
            passcode: 76184692,
            lore: `A one-eyed giant that pummels foes with its thick arms.
            It must be treated with wary respect.`
        }
    ];

    const div = document.querySelector("div");
    cards.forEach(c => {
        div.innerHTML += `
        <div class="${c.cardType.toLowerCase()} card-item">
            <p class="top-line"><span class="id-circ">${c.id}</span> | 
            <span class="card-name">${c.name}</span>
            <span class="more-info">
                ${c.level}<img src="level-star.png" width="14px">
            </span>
            <span>
                ${c.attribute} - ${c.type}
            </span>
            <span>
                ATK ${c.atk} / DEF ${c.def}
            </span>
            <span>
                DC: ${c.dc}
            </span>
            </p>
            <p>${c.lore}</p>
        </div>
        `
    });
}