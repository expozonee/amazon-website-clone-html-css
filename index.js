const mainImage = document.querySelector(".main-image img");
const mainImageSrc = mainImage.src;

const zoomedImage = document.querySelector(".zoomed-image img");
zoomedImage.src = mainImageSrc;

const otherImages = document.querySelectorAll(".other-images img");

otherImages.forEach((image) => {
  image.addEventListener("click", () => {
    mainImage.src = image.src;
    zoomedImage.src = image.src;
  });
});
