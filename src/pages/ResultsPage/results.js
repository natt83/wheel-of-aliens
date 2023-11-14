document.addEventListener('DOMContentLoaded', function() {
    displayResults();
});

/* function displayResults() {
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = '';  // Limpiar la tabla antes de agregar nuevos resultados

    const results = JSON.parse(localStorage.getItem('results')) || [];

    if (results.length > 0) {
        results.reverse(); // Invertir el orden del array para mostrar el ganador primero

        results.forEach((result, index) => {
            const row = resultsTable.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.textContent = index + 1; // Número de participante
            cell2.textContent = result.player; // Nombre del participante
            cell3.textContent = `Eliminado en ronda ${result.round + 1}`; // Ronda en la que fue eliminado (+1 para ajustar la numeración)
        });
    } else {
        // Mensaje si no hay resultados
        const row = resultsTable.insertRow(-1);
        const cell = row.insertCell(0);
        cell.colSpan = 3;
        cell.textContent = 'No hay resultados disponibles.';
    }
}
 */

function displayResults() {
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = '';  // Limpiar la tabla antes de agregar nuevos resultados

    const results = JSON.parse(localStorage.getItem('results')) || [];

    if (results.length > 0) {
        results.reverse(); // Invertir el orden del array para mostrar el ganador primero

        // Agregar información de todos los jugadores eliminados
        results.forEach((result, index) => {
            const row = resultsTable.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            // Número de participante: índice + 1 (ajustado para el orden descendente)
            cell1.textContent = results.length - index;
            cell2.textContent = result.player; // Nombre del participante
            cell3.textContent = `Eliminado en ronda ${result.round + 1}`; // Ronda en la que fue eliminado (+1 para ajustar la numeración)
        });
    } else {
        // Mensaje si no hay resultados
        const row = resultsTable.insertRow(-1);
        const cell = row.insertCell(0);
        cell.colSpan = 3;
        cell.textContent = 'No hay resultados disponibles.';
    }
}



