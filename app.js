//Store image data
let images = {
  sourceURL: [
    "./images/MobieandSmutt.webp",
    "./images/BluandRocky.webp",
    "./images/OliandDewey.webp",
    "./images/Mobie1.webp",
    "./images/Blu1.webp",
    "./images/Smutt1.webp",
    "./images/Mobie2.webp",
    "./images/Mobie3.webp",
    "./images/Mobie4.webp",
  ],
  altText: [
    "A yellow labrador called Mobie, and a black cat called Smutt",
    "A grey cat called Blu and a black cat called Rocky",
    "A grey chinchilla called Oli and a white chinchilla called Dewey",
    "A yellow labrador called Mobie, hiding her eyes from the light because she is trying to sleep",
    "A grey cat called Blu, sprawled out on his favourite blanket",
    "A black cat called smutt, licking his feet while sat on a chair",
    "A yellow labrador called Mobie, snoozing, leaning her head on a desk",
    "A yellow labrador called Mobie, curled up, squished into a chair",
    "A yellow labrador called Mobie, sprawled on a sofa wearing some dog clothing",
  ],
};

//create thumbnail images
function createThumbnails() {
  for (i = 0; i < images.sourceURL.length; i++) {
    const newImg = document.createElement("img");
    newImg.src = images.sourceURL[i];
    newImg.alt = images.altText[i];
    newImg.className = "thumbnail-image";
    if (i === 0) {
      newImg.className = "thumbnail-image first-image";
    }
    thumbnailContainer = document.querySelector(".thumbnail-container");
    thumbnailContainer.appendChild(newImg);
    newImg.addEventListener("click", function (event) {
      createFullScreenImages(event.srcElement);
      console.log(event);
    });
  }
}
createThumbnails();

//create main/background image
const firstImage = document.querySelector(".first-image");
createFullScreenImages(firstImage);
function createFullScreenImages(image) {
  //remove old image
  mainImage = document.querySelector(".main-image-container");
  mainImage.innerHTML = null;
  newFullscreenImage = document.createElement("img");
  newFullscreenImage.src = image.src;
  newFullscreenImage.alt = `fullscreen image of ${image.alt}`;
  mainImage.appendChild(newFullscreenImage);
}
