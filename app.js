const musica = new Audio('audio/musica.mp3');
const cricri = document.querySelector('.cricri');

cricri.addEventListener('click', () => {
    musica.play();
})
