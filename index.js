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

const template = document.querySelector("#modalTemplate");

mainImage.addEventListener("click", () => {
  const modalClone = template.content.cloneNode(true);
  document.body.appendChild(modalClone);

  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal-content img");

  modalImage.src = mainImage.src;
  modal.style.display = "flex";
  modal.style.overflow = "hidden";

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      if (document.body.contains(modalClone)) {
        document.body.removeChild(modalClone);
      }
    }
  });

  const modalCloseButton = document.querySelector(".close");
  modalCloseButton.addEventListener("click", () => {
    modal.style.display = "none";
    if (document.body.contains(modalClone)) {
      document.body.removeChild(modalClone);
    }
  });
});
