function changeUFO() {
    var imagenContainer = document.getElementById('imagenContainer');

    if (imagenContainer.classList.contains('ufo')) {
        imagenContainer.classList.remove('ufo');
        imagenContainer.classList.add('imagen2'); 
    } else {
        imagenContainer.classList.remove('imagen2');
        imagenContainer.classList.add('ufo');
    }
}

