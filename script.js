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




//const fileUrl = "https://raw.githubusercontent.com/Shaan-kapoor/ShuffleSound/main/youtube%20urls.txt";

let videoIds = ['K4xLi8IF1FM', 'Rp0Z9YVOnKQ', 'hN5MBlGv2Ac', '5qqAjaOAX90', 'M2cckDmNLMI', 'H08YWE4CIFQ', 'NFMmSOWPj_k', 'kEzazr9jGF0', 'EsJGbHJyXYc', '8OZDgBmehbA', 'vB8sxY_PJ_w', 'F6SDc5uMEgs', 'cKlEE_EYuNM', 'x2rvSf0STBM', '3eytpBOkOFA', 'sVTy_wmn5SU', 'B9Fy990Pq9I', '1FliVTcX8bQ', 'mBXBOLG06Wc', 'sk1Z-Hqwwog', 'pyf8cbqyfPs', 'Km71Rr9K-Bw', 'CbH2F0kXgTY', '-lec--FlSJ4', 'X6qwcqtvPXk', 'YB_St-YN3Y8', 'zPR-LcqWZJU', '48ZWn81y9cQ', 'jYSlpC6Ud2A', '4vbDFu0PUew', 'tToiJveylxA', '_k0mJYct4UE', 'L7spCJxloLY', '8tOIjOPZ5sA', '44cICMd3jW4', '_ciQX22n9NE', '2LBPva2Rz0A', 'B4cbjIMz6DY', 'k6jqx9kZgPM', 'ivijoIfhl0o', 'xJWxbgoq_rU', 'T6YVgEpRU6Q', 'fMIn43MiwG8', 'tu3NNRRmRhA', 'mBB5RYgax5c', 'gt-v_YCkaMY', '11cta61wi0g', 'PBJolcCW__4', 'P9tKTxbgdkk', 'k1T6vBBrZXo', 'a51VH9BYzZA', 'vUsikBoa8i0', 'lMEt3RdqB9Y', 'cxM_FmezzFA', 's0rjweSQonc', 'o1sUaVJUeB0', 'Rkrm5foi188', 'bq2vctuvBGY', 'Xs0Lxif1u9E', '-yR1IBtixHY', 'nV1DHIWSdEo', '8wCrYHNw0dI', '90FhT0I0g7w', 'HUT81VaUeyY', 'AROi9sNCVKs', 'YOf_to6-Jrw', 'ixLrlhthgHs', 'NwOvu-j_WjY', 'P9kK1Fig0Ek', 'C9vAUfSEh8Q', 'VOnDj9YteCo', 'cXCBiF67jLM', '_N5JJ18iv54', 'U4fSjh7ABDE', '2eOg5DoYuwU', 'f3GSXNGxhDc', 'fwzRR6Bsro4', 'zejYD43HyQo', 'dJf4wCdLU18', 'kagoEGKHZvU', 'ejzfqXA-bYY', 'rSYoIuyks8g', '6OC92oxs4gA', 'maHs9Ogzojo', 'e5LaKxJVeVI', '0HL7QlHyceI', 'qnOMDlEIzKI', 'fjx_uy5eD8g', 'iO2-QgebNhs', 'c64_lZErcOQ', 'LTeROfwwtnA', 'TDi-hGRYX6g', 'e19-eR6_0Lo', 'd6i4AtCxrDo', 'gwAuvX9i8yQ', 'ba8XoFqIJVY', 'frPa5_fkkzI', '', 'JpX3htCVBFM', 'BJLeH7Jbeuo'];

// function getVideoIdsFromFile(fileUrl) {
//   return fetch(fileUrl)
//     .then(response => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         throw new Error("Unable to fetch video IDs");
//       }
//     })
//     .then(data => {
//       return data.trim().split("\n");
//     })
//     .catch(error => {
//       console.error(error);
//       return null;
//     });
// }



// getVideoIdsFromFile(fileUrl, videoIds => {
//   console.log(videoIds); // Array of all video IDs from the specified text file
// });








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

