let players = [];

function addPlayer() {
    const PlayerNameInput = document.getElementById("PlayerName");
    const PlayerName = PlayerNameInput.value;
    if (PlayerName) {
        players.push(PlayerName);
        PlayerNameInput.value = "";
        updatePlayerList();
    }
}

function toggleEditInput(index, playerNameElement) {
    const playerName = playerNameElement.textContent;

    playerNameElement.nextElementSibling.style.display = "none";
    playerNameElement.nextElementSibling.nextElementSibling.style.display = "none";

    const nameInput = document.createElement("input");
    nameInput.value = playerName;
    nameInput.style.width = "100px";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => saveEditedName(index, nameInput, playerNameElement));

    const cancelEditButton = document.createElement("button");
    cancelEditButton.textContent = "Cancel";
    cancelEditButton.addEventListener("click", () => cancelEdit(playerNameElement, playerName));

    playerNameElement.innerHTML = '';
    playerNameElement.appendChild(nameInput);
    playerNameElement.appendChild(saveButton);
    playerNameElement.appendChild(cancelEditButton);
}

function saveEditedName(index, nameInput, playerNameElement) {
    const newName = nameInput.value;
    players[index] = newName;
    playerNameElement.textContent = newName;
    playerNameElement.nextElementSibling.style.display = "inline-block";
    playerNameElement.nextElementSibling.nextElementSibling.style.display = "inline-block";
}

function cancelEdit(playerNameElement, oldName) {
    playerNameElement.nextElementSibling.style.display = "inline-block";
    playerNameElement.nextElementSibling.nextElementSibling.style.display = "inline-block";

    playerNameElement.textContent = oldName;
}

function deletePlayer(index) {
    players.splice(index, 1);
    updatePlayerList();
}

function updatePlayerList() {
    const PlayerList = document.getElementById("PlayerList").getElementsByTagName('tbody')[0];
    PlayerList.innerHTML = "";

    players.forEach((player, index) => {
        const row = document.createElement("tr");

        const cell = document.createElement("td");

        const playerContainer = document.createElement("div");

        const playerNameElement = document.createElement("span");
        playerNameElement.textContent = player;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => toggleEditInput(index, playerNameElement));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deletePlayer(index));

        playerContainer.appendChild(playerNameElement);
        playerContainer.appendChild(editButton);
        playerContainer.appendChild(deleteButton);

        cell.appendChild(playerContainer);
        row.appendChild(cell);

        PlayerList.appendChild(row);
    });
}

updatePlayerList();
