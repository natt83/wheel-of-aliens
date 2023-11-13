// gameplay.js

// Definir la lista de jugadores (puedes cargarla dinámicamente según tus necesidades)
let players = ["Juan", "Pedro", "Mateo", "Ana", "Elena"];

// Evento al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  // Lógica para cargar dinámicamente las imágenes y nombres de los astronautas
  loadAstronauts();
});

// Evento al hacer clic en el botón de "Shoot"
document.getElementById("shootButton").addEventListener("click", function () {
  // Lógica para realizar una eliminación y mostrar el mensaje correspondiente
  const eliminatedPlayer = performElimination();
  displayEliminationMessage(eliminatedPlayer);
});

// Función para cargar dinámicamente las imágenes y nombres de los astronautas
function loadAstronauts() {
  const astronautsContainer = document.querySelector(".astronauts-container");

  players.forEach((player) => {
    // Crea elementos de imagen y texto para cada astronauta
    const astronautDiv = document.createElement("div");
    astronautDiv.classList.add("astronaut");

    const astronautImage = document.createElement("img");
    astronautImage.src = `./src/assets/images/astronaut.png`; // Ajusta la ruta según tu estructura

    const astronautName = document.createElement("span");
    astronautName.textContent = player;

    // Agrega los elementos al contenedor de astronautas
    astronautDiv.appendChild(astronautImage);
    astronautDiv.appendChild(astronautName);
    astronautsContainer.appendChild(astronautDiv);
  });
}

// Función para realizar una eliminación (simulada aleatoriamente)
function performElimination() {
  const randomIndex = Math.floor(Math.random() * players.length);
  return players.splice(randomIndex, 1)[0];
}

// Función para mostrar el mensaje de eliminación y realizar acciones adicionales
function displayEliminationMessage(player) {
  const eliminationMessage = document.getElementById("eliminationMessage");
  eliminationMessage.textContent = `El jugador ${player} ha sido eliminado.`;

  // Lógica para cambiar la imagen del astronauta eliminado a "eliminated-player.png"
  const eliminatedPlayerImage = document.querySelector(`.astronaut img[src='./src/assets/images/astronaut.png'][alt='${player}']`);
  if (eliminatedPlayerImage) {
    eliminatedPlayerImage.src = "./src/assets/images/eliminated-player.png";
  }

  // Otras acciones necesarias después de la eliminación
  // ...
}
