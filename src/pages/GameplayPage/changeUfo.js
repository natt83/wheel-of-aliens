function changeUFO() {
    let ufoImage = document.getElementById('ufo');
    let newImageSrc = '../../assets/images/activated-UFO.png';
    ufoImage.src = newImageSrc;

    setTimeout(function () {
        ufoImage.src = '../../assets/images/UFO.png';
    }, 3000); 
}



