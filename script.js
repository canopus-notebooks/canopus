const images = document.querySelectorAll(".popup-img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
    popupImg.alt = img.alt || "ÕæÑÉ ÇáãäÊÌ";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target !== popupImg) {
    popup.style.display = "none";
  }
});