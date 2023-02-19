// Define your API key and playlist IDs
// const API_KEY = "AIzaSyDzbugo29YxvzUpGhe7pPYABlGLH9NPaUM";
// const playlistIds = ["PLyORnIW1xT6wqvszJbCdLdSjylYMf3sNZ", "PL9bw4S5ePsEG1Ovrxj9o2RLx43ALFoFyU", "PLq-e2Ss4lhca4e40LiLrkjD-2EUQ7sEf8"];
// let videoIds = [];
// // Function to retrieve video IDs from multiple playlists
// async function getVideoIdsFromPlaylists(playlistIds) {
//   try {
//     let videoIds = [];

//     // Iterate over each playlist ID and retrieve its video IDs
//     for (const playlistId of playlistIds) {
//       let nextPageToken = "";
//       let videosLeft = true;

//       while (videosLeft) {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&pageToken=${nextPageToken}&playlistId=${playlistId}&key=${API_KEY}`
//         );
//         const data = await response.json();
//         const playlistVideoIds = data.items.map(
//           (item) => item.snippet.resourceId.videoId
//         );
//         videoIds = [...videoIds, ...playlistVideoIds];
//         nextPageToken = data.nextPageToken;
//         videosLeft = nextPageToken !== undefined;
//       }
//     }

//     // Return the combined video IDs as an array
//     return videoIds;
//   } catch (error) {
//     console.error(error);
//   }
// }

let videoIds = ["ODY6JWzS8WU"];

function playRandomSong() {
  var randomIndex = Math.floor(Math.random() * videoIds.length);
  var videoId = videoIds[randomIndex];
  var player = document.getElementById("player");
  player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
}

window.onload = function() {
  //getVideoIdsFromPlaylists(playlistIds);
  playRandomSong();

};

