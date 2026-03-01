document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".popup-img");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("closeBtn");

  if (!images.length || !popup || !popupImg || !closeBtn) {
    console.log("Popup elements missing:", { images: images.length, popup, popupImg, closeBtn });
    return;
  }

  function openPopup(src, altText) {
    popup.style.display = "flex";
    popupImg.src = src;
    popupImg.alt = altText || "صورة المنتج";
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    popup.style.display = "none";
    popupImg.src = "";
    document.body.style.overflow = "";
  }

  images.forEach(img => {
    img.addEventListener("click", () => openPopup(img.src, img.alt));
    img.addEventListener("touchstart", () => openPopup(img.src, img.alt), { passive: true });
  });

  closeBtn.addEventListener("click", closePopup);

  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePopup();
  });
});
