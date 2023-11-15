document.addEventListener('DOMContentLoaded', function() {
    displayResults();
});

function displayResults() {
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = '';  

    const results = JSON.parse(localStorage.getItem('results')) || [];

    if (results.length > 0) {
        results.reverse(); 

        
        results.forEach((result, index) => {
            const row = resultsTable.insertRow(-1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            
            cell1.textContent = results.length - index;
            cell2.textContent = result.player; 
            cell3.textContent = `Eliminado en ronda ${result.round + 1}`; 
        });
    } else {
        
        const row = resultsTable.insertRow(-1);
        const cell = row.insertCell(0);
        cell.colSpan = 3;
        cell.textContent = 'No hay resultados disponibles.';
    }
}



