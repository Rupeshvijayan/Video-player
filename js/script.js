const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const f5Btn = document.getElementById('forward');
const b5Btn = document.getElementById('backward');
const volumenInputEle = document.getElementById('volume-slider');
const muteBtn = document.getElementById('mute');
const unmuteBtn = document.getElementById('unmute');
const downloadBtn = document.getElementById('download');
const swapBtn = document.getElementById('swap');
const fullScreenBtn = document.getElementById('full-screen');
const video = document.getElementById('main-video');

//To play the video
function playFn(){
    video.play();
}

//To pause the video
function pauseFn(){
    video.pause();
}

//Forward
function forwardFn(){
    //Get the current time
    let cTime = video.currentTime;
    //Add 5 secs
    cTime+=5;
    //play from new time
    video.currentTime = cTime;
}

//Backward
function backwardFn(){
    //Get the current time
    let cTime = video.currentTime;
    //Sub 5 secs
    cTime-=5;
    //play from new time
    video.currentTime = cTime;
}

//Mute the video
function muteFn(){
    video.muted = true;
}

//Unmute the video
function unmuteFn(){
    video.muted = false;
}

//download
function downloadFn(){
    //Get the filepath
    let filepath = video.getAttribute('src');
    //Update href value in A tag
    downloadBtn.setAttribute("href", filepath);
    //Set that filepath into download attribute
    downloadBtn.setAttribute("download", filepath);
}

//Swap video quality
function swapFn(){
    //Get selected video
    let targetPath = this.value;
    console.log(targetPath);

    cTime = video.currentTime;
    //Change filepath of video
    video.setAttribute('src', targetPath);
    //Change current time
    video.currentTime = cTime;
    playFn();
}

//Fullscreen
function fullScreenFn(){
    video.requestFullscreen();
}

//Volume slider
function volumeFn(){
    let volumeInput = volumenInputEle.value;

    //Start from 0 ; convert 100 => 1
    volumeInput = volumeInput/100;
    //Apply to the video
    video.volume = volumeInput;
}

playBtn.addEventListener("click", playFn);
pauseBtn.addEventListener("click", pauseFn);
f5Btn.addEventListener("click", forwardFn);
b5Btn.addEventListener("click", backwardFn);
volumenInputEle.addEventListener("click", volumeFn);
muteBtn.addEventListener("click", muteFn);
unmuteBtn.addEventListener("click", unmuteFn);
downloadBtn.addEventListener("click", downloadFn);
swapBtn.addEventListener("change", swapFn);
fullScreenBtn.addEventListener("click", fullScreenFn);
      