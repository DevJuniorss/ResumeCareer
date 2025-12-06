document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const track = document.querySelector(".track");

  // Pausar animação ao passar o mouse (UX moderno)
  carousel.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
});
