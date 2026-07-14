const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-list");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const galleryButtons = document.querySelectorAll(".gallery-button");

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
};

if (lightbox && lightboxImage && galleryButtons.length > 0) {
  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const imageSrc = button.getAttribute("data-gallery-image");
      const imageAlt = button.getAttribute("data-gallery-alt") || "";

      if (!imageSrc) return;

      lightboxImage.src = imageSrc;
      lightboxImage.alt = imageAlt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  lightbox.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.lightboxClose === "true") {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}
