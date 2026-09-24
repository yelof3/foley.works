document.addEventListener("DOMContentLoaded", function () {
  const user = "Yeloft";

  const url =
    "https://lastfm-last-played.biancarosa.com.br/" +
    encodeURIComponent(user) +
    "/latest-song";

  const trackElement = document.getElementById("lastfm-track");
  const artistElement = document.getElementById("lastfm-artist");
  const artElement = document.getElementById("lastfm-art");

  if (!trackElement || !artistElement || !artElement) {
    return;
  }

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Last.fm request failed");
      }

      return response.json();
    })
    .then(function (data) {
      const track = data.track;

      trackElement.textContent = track.name;
      artistElement.textContent = track.artist["#text"];

      const images = track.image || [];
      const artwork =
        images.find(function (image) {
          return image.size === "large";
        }) || images[images.length - 1];

      if (artwork && artwork["#text"]) {
        artElement.src = artwork["#text"];
        artElement.alt =
          track.name + " by " + track.artist["#text"];
      } else {
        artElement.style.display = "none";
      }
    })
    .catch(function (error) {
      console.error("Last.fm:", error);
      trackElement.textContent = "Unable to load";
      artistElement.textContent = "";
    });
});
