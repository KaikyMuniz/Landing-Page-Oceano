const btnAudio = document.querySelector('#ativar-audio');
const reprodutorAudio = document.querySelector('#reprodutor-audio')

btnAudio.addEventListener('click', tocarAudio);

function tocarAudio(){
    const btnAudioimagem = btnAudio.style.backgroundImage;
    
    if(btnAudioimagem == '' || 
    btnAudioimagem == 'url("img/play-audio.png")'){
        btnAudio.style.backgroundImage = `url('img/pause-audio.png')`;
        reprodutorAudio.play();
    }else{
        btnAudio.style.backgroundImage = `url('img/play-audio.png')`;
        reprodutorAudio.pause();
    }
}