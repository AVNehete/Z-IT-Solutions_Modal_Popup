let btn = document.querySelector(".btn");
let container = document.querySelector(".btn-container")
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector("video");

btn.addEventListener('click', () => {
  clip.classList.add('active');
  container.classList.add('active');
  video.play();
});

close.addEventListener('click', () => {
  clip.classList.remove('active');
  container.classList.remove('active');
  video.pause();
});