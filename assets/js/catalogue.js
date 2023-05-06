const videoContainers = document.querySelectorAll(".video-container");
const zoomedVideo = document.querySelector(".zoomed-video");
let currentVideo;

videoContainers.forEach((videoContainer) => {
  const video = videoContainer.querySelector("video");
  const videoUrl = videoContainer.dataset.videoUrl;

  video.addEventListener("loadedmetadata", () => {
    video.pause();
  });

  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });

  video.addEventListener("click", () => {
    currentVideo = video;
    zoomedVideo.innerHTML = `
          <div id="iframe" class="iframe-container">
          <button class="close-button">&times;</button>
          <iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>`;
    zoomedVideo.style.display = "flex";

    const closeButton = zoomedVideo.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
      closeZoomedVideo();
    });
  });

  function closeZoomedVideo() {
    currentVideo.pause();
    zoomedVideo.style.display = "none";
    zoomedVideo.innerHTML = "";
  }
});
