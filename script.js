const galleryContainer = document.getElementById('thumbnail-container');
const totalImages = 6; 
const imagePath = galleryContainer.getAttribute('image-path');
const imageBase = galleryContainer.getAttribute('image-base');
const videoPath = galleryContainer.getAttribute('video-path');
const videoBase = galleryContainer.getAttribute('video-base');
let video = document.querySelector("video");

for (let i = 1; i <= totalImages; i++) {
    const imageFile = `${imageBase}${i}.jpg`;
    const videoFile = `${videoBase}${i}.mp4`;
    const anchor = document.createElement('a');
    anchor.href = `${imagePath}/${imageFile}`;
    anchor.classList.add('thumbnailContainer-item');
    anchor.target = '_blank';

    const img = document.createElement('img');
    img.src = `${imagePath}/${imageFile}`;
    img.alt = imageFile;
    img.classList.add('thumbnailContainer-image');

    anchor.appendChild(img);
    galleryContainer.appendChild(anchor);

    img.addEventListener('click', (event) => {
        event.preventDefault();
        FullImage(`${videoPath}/${videoFile}`);
    });
}

const Imgcontainer = document.getElementById('Full-video-container');
const fullImage = document.getElementById('Full-video');

function FullImage(src) {
  Imgcontainer.style.display = "flex";
    fullImage.src = src;
    video.play();
}

window.onclick = function (event) {
    if (event.target == Imgcontainer) {
      Imgcontainer.style.display = "none";
    }
}
