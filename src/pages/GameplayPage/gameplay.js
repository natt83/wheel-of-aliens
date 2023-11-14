document.addEventListener('DOMContentLoaded', function() {
    const astronautList = document.getElementById('astronautList');
    const shootButton = document.getElementById('shootButton');
    let players = JSON.parse(localStorage.getItem("players")) || [];

    if (players.length > 0) {
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
        const availablePlayers = Array.from(astronautItems).filter(item => !item.classList.contains('eliminated'));
        
        if (availablePlayers.length > 0) {
            const randomIndex = Math.floor(Math.random() * availablePlayers.length);
            const eliminatedPlayer = availablePlayers[randomIndex].querySelector('img').getAttribute('data-player');

            availablePlayers[randomIndex].classList.add('eliminated');
            availablePlayers[randomIndex].querySelector('img').src = '../../assets/images/eliminate-player.png';

            alert(`El jugador ${eliminatedPlayer} ha sido eliminado.`);
        } else {
            alert('Todos los jugadores han sido eliminados.');
        }
    } else {
        alert('No hay jugadores para eliminar.');
    }
}
