// getting the player elements, audio, img, title
var audioPlayer = document.getElementById("audioPlayer");
var playerImg = document.querySelector('.audio-player-img');
var playerTitle = document.querySelector('.audio-player-title');
var playerMood = document.querySelector('.audio-player-mood');
let hd = document.getElementById("hd"); // dump div used to trigger puase/play
hd.style.display = "none";


// on play function triggered when user clicked on the play button inside the player.
// We use this fucntion to add style to the playing song on songs list, so the user knows which song is playing 
audioPlayer.onplay = function () {
    let aId = audioPlayer.getAttribute('data-id');

    let selctedTitle = document.getElementById("listTitle_" + aId);
    let selectedBtn = document.getElementById("btnPlay_" + aId);

    // changing the style of clicked song with pink color to indicate that it's playing
    selctedTitle.classList.add('selected');
    selectedBtn.classList.remove('list-play');
    selectedBtn.classList.add('list-pause');
};


// on pause function triggered when user clicked on the pause button inside the player.
// We use this fucntion to add pause button style to the playing song from songs list.
audioPlayer.onpause = function () {
    let aId = audioPlayer.getAttribute('data-id');
    let selctedTitle = document.getElementById("listTitle_" + aId);
    let selectedBtn = document.getElementById("btnPlay_" + aId);

    // remove the pink color we've added before
    selctedTitle.classList.remove('selected');
    selectedBtn.classList.add('list-play');
    selectedBtn.classList.remove('list-pause');
};

// this function is trigger when the user clicked on one of the songs from the list
// we are passing the item that is blocked
function changeURL(el) {
    audioPlayer.style.display = "block";

    // get the id of the clicked item
    let id = el.getAttribute('id');
    // assigning the data-id attribute of the player, so we can track when the user click pause/play on the player itself
    audioPlayer.setAttribute('data-id', id);

    // get elements to of the selected song
    let img = document.getElementById("listImg_" + id);
    let title = document.getElementById("listTitle_" + id);
    let mood = document.getElementById("listMood_" + id);

    // updating the player information
    playerImg.src = img.src;
    playerTitle.innerText = title.innerText;
    playerMood.innerText = mood.innerText;

    // Create a current source variable to track play/pause functions
    // When users clicks one the same song, we want to create a pause effect rather than reload the song again
    let currentSrc = '';
    let src = audioPlayer.src;
    currentSrc = src.replace(/^.*[\\\/]/, '');

    // clicking on the item when it's playing
    if (currentSrc == el.getAttribute('data-src')) {
        // if we are clicking on the same song again, we will trigger pause/play functions
        if (hd.style.display === "none") {
            // pause
            audioPlayer.pause();
            hd.style.display = "block";
        } else {
            //play
            audioPlayer.play();
            hd.style.display = "none";
        }
    } else {
        // if new song is clicked, we assign new src to the player 
        audioPlayer.src = 'mp3/' + el.getAttribute('data-src');
        hd.style.display = "none";
        audioPlayer.play();

        // remove selected style from other songs
        listBtns = document.querySelectorAll('.list-btn');
        listTitles = document.querySelectorAll('.list-title');

        // removing selected style from other song lists
        for (var i = 0, len = listBtns.length; i < len; i++) {
            listBtns[i].classList.remove('list-pause');
            listBtns[i].classList.add('list-play');
        }
        for (var i = 0, len = listTitles.length; i < len; i++) {
            listTitles[i].classList.remove('selected');
        }
    }
}