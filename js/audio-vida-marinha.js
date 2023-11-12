const reprodutorVideo = document.querySelector('#video');
const reprodutorAudio = document.querySelector('#audio');

reprodutorVideo.addEventListener('click', ContinuarVideo);

function ContinuarVideo(){
    reprodutorVideo.play();
    reprodutorAudio.play();
}