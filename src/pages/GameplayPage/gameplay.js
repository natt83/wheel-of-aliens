document.addEventListener('DOMContentLoaded', function() {
    const astronautList = document.getElementById('astronautList');
    const shootButton = document.getElementById('shootButton');
    const players = JSON.parse(localStorage.getItem("players"));

    if (players && players.length > 0) {
        const astronautGrid = document.createElement('div');
        astronautGrid.classList.add('astronaut-grid');

        players.forEach((player) => {
            const astronautDiv = document.createElement('div');
            astronautDiv.classList.add('astronaut-item');
            astronautDiv.innerHTML = `
                <img src="../../assets/images/astronaut.png" alt="Astronaut Avatar" data-player="${player}">
                <p>${player}</p>`;
            astronautGrid.appendChild(astronautDiv);
        });

        astronautList.appendChild(astronautGrid);
        shootButton.addEventListener('click', shootPlayer);
    }
});

function shootPlayer() {
    const astronautItems = document.querySelectorAll('.astronaut-item');

    if (astronautItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * astronautItems.length);
        const eliminatedPlayer = astronautItems[randomIndex].querySelector('img').getAttribute('data-player');

        astronautItems[randomIndex].querySelector('img').src = '../../assets/images/eliminate-player.png';

        alert(`El jugador ${eliminatedPlayer} ha sido eliminado.`);
    } else {
        alert('No hay jugadores para eliminar.');
    }
}
