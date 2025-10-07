// Play or pause videos based on scroll visibility
const videos = document.querySelectorAll("video");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();  // 👈 Play when visible
    } else {
      entry.target.pause(); // 👈 Pause when off-screen
    }
  });
}, { threshold: 0.5 }); // 50% of the video must be visible

videos.forEach((video) => {
  video.muted = true;      // Autoplay requires mute
  video.playsInline = true;
  observer.observe(video);
});
