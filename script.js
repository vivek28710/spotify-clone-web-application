

console.log("Welcome to Spotify");

let SongIndex = 0;
let audioElement = new Audio('song/1.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "soreyan", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "kaati raat maine kheto mai - pawan singh", filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "jatt aa gaye - jaat", filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "laal pari", filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "pardesiya hai tere pyar mai jab se - Sonu nigam", filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "tauba tauba", filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "saphire - Ed sheren", filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "bollywood mix", filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "kaun disha mai", filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "sayara", filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
];    

// Setup UI for each song
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

    element.addEventListener('click', () => {
        SongIndex = i;
        audioElement.pause();                     
        audioElement.src = songs[i].filePath;     
        audioElement.currentTime = 0;
        audioElement.play();

        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        document.querySelector('.songInfo p').innerText = songs[i].songName; // update only name
    });
});

// Handle master play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Seek from progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
