const mainImage = document.querySelector(".main-image img");
const mainImageSrc = mainImage.src;

const zoomedImage = document.querySelector(".zoomed-image img");
zoomedImage.src = mainImageSrc;

const otherImages = document.querySelectorAll(".other-images img");

otherImages.forEach((image) => {
  image.addEventListener("click", () => {
    mainImage.src = image.src;
    zoomedImage.src = image.src;

    otherImages.forEach((i) => {
      i.classList.remove("active");
    });
    image.classList.toggle("active");
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
      modal.remove();
    }
  });

  const modalCloseButton = document.querySelector(".close");
  modalCloseButton.addEventListener("click", () => {
    modal.style.display = "none";
    modal.remove();
  });
});

const variants = document.querySelectorAll(".variant");

variants.forEach((variant) => {
  variant.addEventListener("click", () => {
    variants.forEach((v) => {
      v.classList.remove("active");
    });
    variant.classList.add("active");
  });
});
