document.getElementById("addCharacter").addEventListener("click", () => {
    const name = prompt("Nome do personagem:");
    const hp = parseInt(prompt("HP do personagem:"), 10);
    
    if (name && !isNaN(hp)) {
        const charList = document.getElementById("characterList");
        const charDiv = document.createElement("div");
        charDiv.textContent = `${name} - HP: ${hp}`;
        charList.appendChild(charDiv);
    }
});
