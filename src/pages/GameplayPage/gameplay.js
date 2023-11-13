document.addEventListener('DOMContentLoaded', function() {
    const astronautList = document.getElementById('astronautList');
    const players = JSON.parse(localStorage.getItem("players"));

    if (players && players.length > 0) {
        const astronautGrid = document.createElement('div');
        astronautGrid.classList.add('astronaut-grid'); 

        players.forEach((player) => {
            const astronautDiv = document.createElement('div');
            astronautDiv.innerHTML = `
                <img src="../../assets/images/astronaut.png" alt="Astronaut Avatar">
                <p>${player}</p>
            `;
            astronautGrid.appendChild(astronautDiv);
        });

        astronautList.appendChild(astronautGrid);
    }
});