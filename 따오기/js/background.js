const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];

const bgImage = document.createElement("img");

const randomImage = images[Math.floor(Math.random() * images.length)];

bgImage.src = `img/${randomImage}`;
bgImage.id = "bgImages";
document.body.appendChild(bgImage);