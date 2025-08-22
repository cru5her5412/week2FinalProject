//Store image data
let images = {
  sourceURL: [
    "./images/MobieandSmutt.jpg",
    "./images/BluandRocky.jpg",
    "./images/OliandDewey.jpg",
  ],
  altText: [
    "A yellow labrador called Mobie, and a black cat called Smutt",
    "A grey cat called Blu and a black cat called Rocky",
    "A grey chinchilla called Oli and a white chinchilla called Dewey",
  ],
};

//create thumbnail images
function createThumbnails() {
  for (i = 0; i < images.length; i++) {
    const newImg = document.createElement("img");
    newImg.src = images.sourceURL[i];
    newImg.alt = images.altText[i];
    newImg.className = ".thumbnail-image";
    thumbnailContainer = document.querySelector(".thumbnail-container");
    thumbnailContainer.appendChild(newImg);
  }
}
createThumbnails();
//create main/background image

function createFullScreenImages() {
  //remove old image
  mainImage = document.querySelector(".main-image-container");
  mainImage.innerHTML = null;
}
