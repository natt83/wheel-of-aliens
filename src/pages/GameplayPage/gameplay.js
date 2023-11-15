function clearOldData() {
    localStorage.removeItem('roundEliminated');
    localStorage.removeItem('results');
}

    

document.addEventListener('DOMContentLoaded', function() {
    clearOldData();
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

        if (availablePlayers.length > 1) {
            const randomIndex = Math.floor(Math.random() * availablePlayers.length);
            const eliminatedPlayerElement = availablePlayers[randomIndex];
            const eliminatedPlayer = eliminatedPlayerElement.querySelector('img').getAttribute('data-player');
            const roundEliminated = localStorage.getItem('roundEliminated') || 0;

            eliminatedPlayerElement.classList.add('eliminated');
            eliminatedPlayerElement.querySelector('img').src = '../../assets/images/eliminate-player.png';

            if (availablePlayers.length === 2) {
                const remainingPlayerElement = availablePlayers.find(item => !item.classList.contains('eliminated')).querySelector('img');
                const remainingPlayer = remainingPlayerElement.getAttribute('data-player');
                remainingPlayerElement.src = '../../assets/images/you-win.png';

                alert(`¡El jugador ${remainingPlayer} ha derrotado a los aliens!`);

                storeResult(remainingPlayer, (roundEliminated) + (1));
            } else {
                alert(`El jugador ${eliminatedPlayer} ha sido eliminado.`);

                storeResult(eliminatedPlayer, (roundEliminated) + (1));

                localStorage.setItem('roundEliminated', (roundEliminated) + (1));
            }
        } else {
            alert('Todos los jugadores han sido eliminados.');
        }
    } else {
        alert('No hay jugadores para eliminar.');
    }
}

function storeResult(player, round) {
    const results = JSON.parse(localStorage.getItem('results')) || [];

    results.push({ player, round });

    localStorage.setItem('results', JSON.stringify(results));
}

