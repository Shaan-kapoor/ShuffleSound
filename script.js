var videoIDs = [
  "C0DPdy98e4c",
  "LXb3EKWsInQ",
  "mkggXE5e2yk",
  // Add more video IDs here
];

function playRandomSong() {
  var randomIndex = Math.floor(Math.random() * videoIDs.length);
  var videoID = videoIDs[randomIndex];
  var player = document.getElementById("player");
  player.src = "https://www.youtube.com/embed/" + videoID + "?autoplay=1";
}

window.onload = function() {
  playRandomSong();
};

